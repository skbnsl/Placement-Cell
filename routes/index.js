
//require express
const express = require('express');
//use the Router
const router = express.Router();

const homeController = require('../controllers/home_controller');
//require middleware for authentication
const Authentication = require('../config/middleware');

//for rendering the home page and authentication
router.get('/', Authentication.isAuthenticate, homeController.home);

//request goes to user.js routes
router.use('/user', require('./user'));

//request goes to student.js routes
router.use('/student', require('./student'));

//exports the router
module.exports = router;