//require express
const express = require('express');
//using Router
const router = express.Router();

const userController = require('../controllers/user_controller');

//routes for sign-in page
router.get('/sign-in', userController.signIn);

//routes for sign-up page
router.get('/sign-up', userController.signUp);

//routes for create new user
router.post('/create', userController.create);

//routes for login for existing user
router.post('/create-session', userController.createSession);

//for logout session
router.get('/sign-out', userController.destroySession);

//exports the routes
module.exports = router;