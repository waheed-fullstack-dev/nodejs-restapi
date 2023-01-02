"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));require('dotenv').config();
require('babel-register');
var isDevelopment = process.env.NODE_ENV !== 'production';

// Main starting point of the application
var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var morgan = require('morgan');
var _require = require('./utils/swagger'),swaggerDocs = _require.swaggerDocs;

var app = express();

// ────────────────────────────────────────────────────────────────────────────────
// ADD CORS

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
  'Access-Control-Allow-Methods',
  'GET,PUT,PATCH,POST,DELETE,OPTIONS');

  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// APP SETUP

app.use(morgan(isDevelopment ? 'dev' : 'combined'));
app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ limit: '4mb', extended: true }));

// Routing

var v1 = require('./controllers/v1');
app.use('api/v1', v1);

// Swagger
var options = {
  controllers: ['./controllers/v1'],
  useStubs:
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
};
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  var port = process.env.PORT || 3090;

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must
    // be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    http.createServer(app).listen(port, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {return _regenerator["default"].wrap(function _callee$(_context) {while (1) switch (_context.prev = _context.next) {case 0:
            console.log('Server listening on: ', port);
            swaggerDocs(app, port);case 2:case "end":return _context.stop();}}, _callee);})));

  });
} else {
  // Server Setup
  var _port = process.env.PORT || 3090;
  var server = http.createServer(app);
  server.listen(_port, function () {
    console.log('Server listening on: ', _port);
  });
}
//# sourceMappingURL=index.js.map