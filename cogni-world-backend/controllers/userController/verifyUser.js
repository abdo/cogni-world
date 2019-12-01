const mongoose = require('mongoose');
// const d = require('../../templates/AccountVerified.html');
const path = require('path');
// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  const { params } = req;

  const token = params.userToken;

  User.findOneAndUpdate({ token }, { $set: { verified: true } })
    .then(user => {
      if (!user) {
        return res.status(400).send('No such user');
      } else {
        res.sendFile(
          path.join(__dirname + '../../../templates/AccountVerified.html'),
        );
      }
    })
    .catch(err => res.status(400).send('No such user'));
};
