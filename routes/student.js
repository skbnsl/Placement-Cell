//require express
const express = require('express');
//using Router
const router = express.Router();

//import student_controller
const studentController = require('../controllers/student_controller');

//using middleware for authentication
const Authentication = require('../config/middleware');

//for add new student in database
router.post('/add', studentController.addStudent);

//for rendering the placement page after authentication
router.get('/placement', Authentication.isAuthenticate, studentController.placement);

//add new interview
router.post('/add-interview', studentController.addInterview);

//downloading the student data
router.get('/download', studentController.download);

//exports the router
module.exports = router;