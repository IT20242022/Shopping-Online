const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://RIDMI:opy8N8iUPMwOorUz@thecentralperk.9weg6.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-whvmj4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose