"use strict";

var _dotenv = require("dotenv");

var mongoose = require('mongoose');

(0, _dotenv.config)(); //const { RUTINA_APP_MONGODB_DATABASE } = process.env;

var MONGODB_URL = process.env.MONGODB_URI; //RUTINA_APP_MONGODB_DATABASE;

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function (db) {
  return console.log('Base de datos Conectada');
})["catch"](function (err) {
  return console.log(err);
});