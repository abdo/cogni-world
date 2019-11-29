const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  console.log(req.user);
  // if (!req.user.isAdmin) {
  //   const message = 'You are not authorized';
  //   return res.status(401).json({message});
  // }

  const newUserinfo = { ...req.body };

  // Resetting values back to their default value if they come as ''
  Object.keys(User.schema.paths).forEach(key => {
    const defaultValue = User.schema.paths[key].options.default;
    if ((defaultValue || defaultValue === 0) && newUserinfo[key] === '') {
      newUserinfo[key] = defaultValue;
    }
  });

  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: newUserinfo },
    { new: true },
  )
    .then(() => res.json({ success: true }))
    .catch(err => {
      const message = 'Error checking database';
      return res.status(500).json({ ...err, message });
    });
};
