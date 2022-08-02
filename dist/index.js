"use strict";

var app = require('./server');

require('./database');

app.listen(app.get('port'), function () {
  console.log('Server ON port', app.get('port'));
});