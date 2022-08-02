const mongoose = require('mongoose');

const { RUTINA_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URL = RUTINA_APP_MONGODB_DATABASE;
//const MONGODB_URL = `mongodb://localhost/${RUTINA_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
  .then(db => console.log('Base de datos Conectada'))
  .catch(err => console.log(err));