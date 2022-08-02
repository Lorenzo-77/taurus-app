"use strict";

var express = require('express');

var exphbs = require('express-handlebars');

var path = require('path');

var methodOverride = require('method-override');

var session = require('express-session');

var passport = require('passport'); // Initializations


var app = express();

require('./config/passport'); // Settings


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
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
}); //Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes')); // Static Public

app.use(express["static"](path.join(__dirname, 'public')));
module.exports = app;