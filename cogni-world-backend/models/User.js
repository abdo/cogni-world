const mongoose = require('mongoose');
const randToken = require('rand-token');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
    type: String,
    default: () => randToken.generate(32),
  },
  pushNotificationToken: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
