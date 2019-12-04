const mongoose = require('mongoose');

const capitalize = require('../../utils/capitalize');

// Models
const CanteenItem = mongoose.model('canteenItem');

module.exports = (req, res) => {
  const { params } = req;

  const newIteminfo = { ...req.body };
  if (newIteminfo.name) {
    newIteminfo.name = capitalize(newIteminfo.name);
  }

  CanteenItem.findOneAndUpdate({ _id: req.params.id }, { $set: newIteminfo })
    .then(() => res.status(200).json({ success: true }))
    .catch(err => {
      const message = 'Error checking database';
      return res.status(500).json({ ...err, message });
    });
};
