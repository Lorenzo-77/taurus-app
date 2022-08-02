"use strict";

var app = require('./server');

require('./database'); //const createAdminUser = require('./libs/createUser');


app.listen(app.get('port'), function () {
  //createAdminUser();
  console.log('Server ON port', app.get('port'));
});