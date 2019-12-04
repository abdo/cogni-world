const express = require('express');

const router = express.Router();
const passport = require('passport');
const onlyAllow = require('./authentication/onlyAllow');
const canteenController = require('../controllers/canteenController/index.js');

// @route  POST api/canteen
// @desc   Create canteen item
// @access Public
// @body   name [price]
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  onlyAllow('admin'),
  canteenController.createCanteenItem,
);

module.exports = router;
