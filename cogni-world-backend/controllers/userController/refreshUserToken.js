const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const keys = require('../../keys.secret');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  const { token, password, ...userInfo } = req.user._doc;

  const loginTokenPayload = {
    ...userInfo,
    isAdmin: keys.adminEmails.includes(userInfo.email),
  };

  // Make JWT
  jwt.sign(
    loginTokenPayload,
    keys.secretOrKey,
    // { expiresIn: 604800 },
    (err, token) => {
      if (err) {
        return res.status(500).json({ error: 'Error getting jwt' });
      }
      return res.status(200).json({ success: true, token: `Bearer ${token}` });
    },
  );
};
