const mongoose = require('mongoose');

import { config } from "dotenv";

config();

const MONGODB_URL = process.env.MONGODB_URI ;


mongoose.connect(MONGODB_URL, {
      
})
  .then(db => console.log('Base de datos Conectada'))
  .catch(err => console.log(err));