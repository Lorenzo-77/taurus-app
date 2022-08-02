"use strict";

//require('dotenv').config();

/*import { config } from "dotenv";

config();*/
var app = require('./server');

require('./database');

var createAdminUser = require('./libs/createUser');

app.listen(app.get('port'), function () {
  createAdminUser();
  console.log('Server ON port', app.get('port'));
});