const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Middleware added");
    next();
})

app.get("/",(req,res)=>{
    res.send("Hello There")
}).listen(3000, function (){
    console.log("Done")
});