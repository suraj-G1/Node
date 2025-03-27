const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;
const dbConnect = ()=>{
    mongoose.connect(DATABASE_URL,{
        useNewUrlParser:true
        ,useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected Successfully")
    }).catch(()=>{
        console.log("Error while connnection Database");
        process.exit(1);
    })
}

module.exports = dbConnect;