const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
        }
    }
)

module.exports = mongoose.model('Todo',todoSchema);