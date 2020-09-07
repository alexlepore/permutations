const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path : "./config/.env"});

module.exports.connection = () =>{
    try{
        mongoose.connect(process.env.URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })

        console.log("MongoDB Connected!")
    } catch (err){
        console.log(`Error: ${err.message}`)
    }
}