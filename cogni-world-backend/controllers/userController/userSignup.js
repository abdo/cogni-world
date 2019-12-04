const bcrypt = require('bcryptjs');
const capitalize = require('../../utils/capitalize');
const mongoose = require('mongoose');

const sendEmail = require('../helpers/sendEmail');
const emailVerificationTemplate = require('../../templates/emailTemplates/emailVerification');

// Models
const User = mongoose.model('user');

// Validations
const validateForm = require('./validations/userSignupForm');

module.exports = (req, res) => {
  // Validate
  const { message, isValid } = validateForm(req.body);

  if (!isValid) {
    return res.status(400).json({ message });
  }

  // Check if there is a user with the same email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        const message = 'A user with the same email already exists';
        return res.status(400).json({ message });
      }
      // Create new user
      const newUser = new User({
        firstName: capitalize(req.body.firstName),
        lastName: capitalize(req.body.lastName),
        email: req.body.email.toLowerCase(),
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (hashingErr, hash) => {
          if (hashingErr) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(savedUser => {
              sendEmail({
                receiverEmail: savedUser.email,
                subject: 'Verify your Cogni World email',
                template: emailVerificationTemplate({ user: savedUser }),
              });
              res.status(200).json({ success: true });
            })
            .catch(dbError => {
              const message = 'Error saving user to database';
              return res.status(500).json({ ...dbError, message });
            });
        });
      });
    })
    .catch(err => {
      const message = 'Error checking database';
      return res.status(500).json({ ...err, message });
    });
};
