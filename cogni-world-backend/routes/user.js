const express = require('express');

const router = express.Router();
const passport = require('passport');
const onlyAllow = require('./authentication/onlyAllow');
const userController = require('../controllers/userController/index.js');

// @route  GET api/user/all
// @desc   Get all users
// @access Private
// @body
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  onlyAllow('admin'),
  userController.getAllUsers,
);

// @route  POST api/user
// @desc   User Registration - Create new user
// @access Public
// @body   firstName lastName password email, [..]
router.post('/', userController.userSignup);

// @route  POST api/user/signin
// @desc   User Login
// @access Public
// @body   email password
router.post('/signin', userController.userSignin);

// @route  PATCH api/user/:userId
// @desc   Edit user info
// @access Private
// @body   firstName lastName password email, [..]
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  userController.updateUser,
);

// @route  GET api/user/isRegistered/:email
// @desc   Get whether or not user is registered
// @access Public
// @body
router.get('/isRegistered/:email', userController.isRegistered);

// @route  GET api/user/verify/:userToken
// @desc   Verify user account using user token
// @access Public
// @body
router.get('/verify/:userToken', userController.verifyUser);

// @route  GET api/user/refresh
// @desc   Verify user account using user token
// @access Private
// @body
router.get(
  '/refresh',
  passport.authenticate('jwt', { session: false }),
  userController.refreshUserToken,
);

module.exports = router;
