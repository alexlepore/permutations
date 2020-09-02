const mongoose = require("mongoose");

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