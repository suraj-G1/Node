const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/profile/:username/:age',(req,res)=>{

    res.send(`Printing ${req.params.age} of ${req.params.username}`);
})

app.listen(3000)