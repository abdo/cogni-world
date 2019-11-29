const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const mongoose = require('mongoose');

const keys = require('../keys.secret');

const User = mongoose.model('user');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User.findById(jwtPayload._id)
        .then(user => {
          if (user) {
            const adminUser = {
              ...user,
              isAdmin: true,
            };

            // In case of admin
            if (keys.adminEmails.includes(user.email)) {
              return done(null, adminUser);
            }

            // In case of signed in user
            return done(null, user);
          }

          // In case of not signed in user
          return done(null, false);
        })
        .catch(err => console.log("Could't validate user", err));
    }),
  );
};
