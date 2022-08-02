"use strict";

var _dotenv = require("dotenv");

var mongoose = require('mongoose');

(0, _dotenv.config)();
var MONGODB_URL = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URL, {}).then(function (db) {
  return console.log('Base de datos Conectada');
})["catch"](function (err) {
  return console.log(err);
});