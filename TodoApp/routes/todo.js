const express = require('express');

//Creating Router
const router = express.Router();

//Importing the Controller
const {createTodo} = require('../controller/createTodo');

//Defining API Routes
router.post('/createTodo',createTodo);

module.exports = router;