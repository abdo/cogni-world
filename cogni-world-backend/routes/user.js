const express = require('express');

const router = express.Router();
const passport = require('passport');
const onlyAllow = require('./authentication/onlyAllow');
const userController = require('../controllers/userController/index.js');

// @route  POST api/user
// @desc   User Registration - Create new user
// @access Public
// @body   firstName lastName password email, [..]
router.post('/', userController.userSignup);

// @route  POST api/user/login
// @desc   User Login
// @access Public
// @body   email password
router.post('/login', userController.userSignin);

// @route  PATCH api/user/:userId
// @desc   Edit user info
// @access Private
// @body   firstName lastName password email, [..]
router.patch(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  userController.updateUser,
);

// @route  GET api/user/isRegistered/:email
// @desc   Get whether or not user is registered
// @access Public
// @body
router.get('/isRegistered/:email', userController.isRegistered);

module.exports = router;
