const mongoose = require('mongoose');

import { config } from "dotenv";

config();

//const { RUTINA_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URL = process.env.MONGODB_URI ;
//RUTINA_APP_MONGODB_DATABASE;


mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
  .then(db => console.log('Base de datos Conectada'))
  .catch(err => console.log(err));