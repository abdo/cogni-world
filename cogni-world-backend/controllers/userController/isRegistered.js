const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  const { params } = req;

  User.findOne({ email: params.email })
    .then(user => {
      if (user) {
        return res.status(200).json({ isRegistered: true });
      } else {
        return res.status(200).json({ isRegistered: false });
      }
    })
    .catch(() => {
      const message = 'Error checking database';
      return res.status(500).json({ ...err, message });
    });
};
