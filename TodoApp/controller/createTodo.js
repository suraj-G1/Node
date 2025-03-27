const Todo = require('../models/Todo');
const mongoose = require('mongoose');

exports.createTodo = async(req,res)=>{
    const{title,description} = req.body;
    if(!title || !description){
        res.status(400).json({
            success:false,
            message:"Title and Description required"
        })
    }

    const newTodo =await Todo.create({title:title,description:description});
    newTodo.save();

    res.status(200).json({
        success:true,
        message:"Created Todo"
    })
}