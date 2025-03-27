const express = requere('express');
const app = express();

app.use(express.json());//Inbuild middleware to parse data from request in the form of JSON

app.use(express.urlencoded({extended:true}));//Middleware to handle HTML from submission