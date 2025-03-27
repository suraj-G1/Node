const express = require('express');
const app = express();
const dbConnect = require('./config/database');
dbConnect();
const todoRoutes = require('./routes/todo');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use('/api/v1',todoRoutes);

app.listen(PORT,()=>{
    console.log("Working on Port 3000");
})

app.get('/',(req,res)=>{
    res.send("This is Home page");
})