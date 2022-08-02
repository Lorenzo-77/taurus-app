"use strict";

var mongoose = require('mongoose');

var RUTINA_APP_MONGODB_DATABASE = process.env.RUTINA_APP_MONGODB_DATABASE;
var MONGODB_URL = RUTINA_APP_MONGODB_DATABASE; //const MONGODB_URL = `mongodb://localhost/${RUTINA_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function (db) {
  return console.log('Base de datos Conectada');
})["catch"](function (err) {
  return console.log(err);
});