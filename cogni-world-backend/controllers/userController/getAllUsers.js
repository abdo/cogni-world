const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => {
      if (users.length === 0) {
        return res.status(404).json({ message: 'No users found' });
      }
      return res.json(users);
    })
    .catch(err => {
      const message = 'Error checking database';
      res.status(500).json({ ...err, message });
    });
};
