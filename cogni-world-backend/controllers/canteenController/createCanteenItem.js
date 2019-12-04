const mongoose = require('mongoose');

const capitalize = require('../../utils/capitalize');

// Models
const CanteenItem = mongoose.model('canteenItem');

// Validations
const validateForm = require('./validations/createItemForm');

module.exports = (req, res) => {
  // Validate
  const { message, isValid } = validateForm(req.body);

  if (!isValid) {
    return res.status(400).json({ message });
  }

  // Check if there is an item with the same name
  CanteenItem.findOne({ name: capitalize(req.body.name) })
    .then(item => {
      if (item) {
        const message = 'Item already exists';
        return res.status(400).json({ message });
      }
      // Create new item
      const newItem = new CanteenItem({
        name: capitalize(req.body.name),
        price: req.body.price,
      });

      newItem
        .save()
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch(dbError => {
          const message = 'Error saving item to database';
          return res.status(500).json({ ...dbError, message });
        });
    })
    .catch(err => {
      const message = 'Error checking database';
      return res.status(500).json({ ...err, message });
    });
};
