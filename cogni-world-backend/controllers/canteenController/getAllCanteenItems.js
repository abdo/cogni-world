const mongoose = require('mongoose');

// Models
const CanteenItem = mongoose.model('canteenItem');

module.exports = (req, res) => {
  CanteenItem.find()
    .sort({ date: -1 })
    .then(canteenItems => {
      if (canteenItems.length === 0) {
        return res.status(404).json({ message: 'No canteen items found' });
      }
      return res.json(canteenItems);
    })
    .catch(err => {
      const message = 'Error checking database';
      res.status(500).json({ ...err, message });
    });
};
