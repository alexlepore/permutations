const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const dotenv = require("dotenv");
dotenv.config({path : "./config/.env"});

module.exports.connection = () =>{
    mongoose.connect(process.env.URI, { 
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
     })
    .then(() =>  console.log('connection successful'))
    .catch((err) => console.error(err));
}