const express = require('express');

const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/userController/index.js');

// @route  POST api/user
// @desc   User Registration - Create new user
// @access Public
// @body   firstName lastName password email
router.post('/', userController.userSignup);

// @route  POST api/user/login
// @desc   User Login
// @access Public
// @body   email password
router.post('/login', userController.userSignin);

module.exports = router;
