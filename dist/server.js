"use strict";

var express = require('express');

var exphbs = require('express-handlebars');

var path = require('path');

var methodOverride = require('method-override'); // Initializations


var app = express(); // Settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs'); // Middlewares

app.use(express.urlencoded({
  extended: false
}));
app.use(methodOverride('_method')); //Routes

app.use(require('./routes/index.routes')); // Static Public

app.use(express["static"](path.join(__dirname, 'public')));
module.exports = app;