
const app = require('./server');
require('./database');

//const createAdminUser = require('./libs/createUser');
app.listen(app.get('port'), ()=>{
    //createAdminUser();
    console.log('Server ON port', app.get('port'));

});