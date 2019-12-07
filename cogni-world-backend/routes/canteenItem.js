const express = require('express');

const router = express.Router();
const passport = require('passport');
const onlyAllow = require('./authentication/onlyAllow');
const canteenController = require('../controllers/canteenController/index.js');

// @route  GET api/canteen/all
// @desc   Get all canteen items
// @access Private
// @body
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  canteenController.getAllCanteenItems,
);

// @route  POST api/canteen
// @desc   Create canteen item
// @access Private
// @body   name [price]
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  onlyAllow('admin'),
  canteenController.createCanteenItem,
);

// @route  PATCH api/canteen/:id
// @desc   Edit canteen item info
// @access Private
// @body   [name price]
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  onlyAllow('admin'),
  canteenController.editCanteenItem,
);

// @route  POST api/canteen/purchase/:itemId
// @desc   The logged in user purchases an item
// @access Private
// @body
router.post(
  '/purchase/:itemId',
  passport.authenticate('jwt', { session: false }),
  canteenController.purchaseCanteenItem,
);

module.exports = router;
