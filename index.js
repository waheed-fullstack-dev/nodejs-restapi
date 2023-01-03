require('dotenv').config();
const isDevelopment = process.env.NODE_ENV !== 'production';
// Main starting point of the application
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const swaggerTools = require('swagger-tools');
const { swaggerDocs } = require('./utils/swagger');
const swaggerDoc = require('./docs/swagger.json');
const app = express();
const routes = require('./routes');

// ────────────────────────────────────────────────────────────────────────────────
// ADD CORS

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,PATCH,POST,DELETE,OPTIONS'
  );
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// APP SETUP

app.use(morgan(isDevelopment ? 'dev' : 'combined'));
app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ limit: '4mb', extended: true }));

// Routing to the v1
app.use('/api/v1', routes);

// Swagger
const options = {
  controllers: ['./routes'],
  useStubs:
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
};
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const port = process.env.PORT || 3090;

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    // Interpret Swagger resources and attach metadata to request - must
    // be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    app.use((err, req, res, next) => {
      res.status(err.statusCode || 500);
      res.json({
        errors: err.errors,
        meta: {
          code: err.statusCode,
          stack: err.stack,
          message: err.message,
        },
      });
    });

    // Start the server
    http.createServer(app).listen(port, async () => {
      console.log('Server listening on: ', port);
      swaggerDocs(app, port);
    });
  });
} else {
  // Server Setup
  const port = process.env.PORT || 3090;
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log('Server listening on: ', port);
  });
}
