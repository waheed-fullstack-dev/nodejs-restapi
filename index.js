require('dotenv').config();
require("@babel/register");

const isDevelopment = process.env.NODE_ENV !== 'production';

// Main starting point of the application
const bodyParser = require('body-parser');
const express = require('express');
const expressValidator = require('express-validator');
const http = require('http');
const mailer = require('express-mailer');
const morgan = require('morgan');
const swaggerTools = require('swagger-tools');

const app = express();

const { NODE_ENV = 'development' } = process.env;

const EventEmitter = require('events');
class AppEmitter extends EventEmitter {}
global.Emitter = new AppEmitter();

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

app.use(
    expressValidator({
        customValidators: {
            isDBUnique: validators.isDBUnique,
            existsInDB: validators.existsInDB,
        },
    })
);
