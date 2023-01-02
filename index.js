require('dotenv').config();
require('babel-register');
const isDevelopment = process.env.NODE_ENV !== 'production';

// Main starting point of the application
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();

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



// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server listening on: ', port);
});
