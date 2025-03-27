const express = require('express');
const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Working Fine");
})

app.listen(3000,()=>{
    console.log("Working on Port 3000");
})