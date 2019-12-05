const getAllUsers = require('./getAllUsers');
const userSignup = require('./userSignup');
const userSignin = require('./userSignin');
const updateUser = require('./updateUser');
const isRegistered = require('./isRegistered');
const verifyUser = require('./verifyUser');

module.exports = {
  getAllUsers,
  userSignup,
  userSignin,
  updateUser,
  isRegistered,
  verifyUser,
};
