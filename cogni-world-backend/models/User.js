const mongoose = require('mongoose');
const randToken = require('rand-token');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    // employee, ceo, coo, ..etc
    type: String,
    default: 'employee',
  },
  department: {
    // dev, sales, ..etc
    type: String,
    default: '',
  },
  avatar: String,
  verified: {
    type: Boolean,
    default: false,
  },
  token: {
    type: Boolean,
    default: () => randToken.generate(16),
  },
  pushNotificationToken: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
