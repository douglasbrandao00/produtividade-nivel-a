const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');
const databaseConnection = require('./config/database');

const app = express();
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/public');

  app.use(bodyParser.json());
  app.use('/', routes);

module.exports = app;
