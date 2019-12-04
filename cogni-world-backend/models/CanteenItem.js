const mongoose = require('mongoose');

const CanteenItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 5,
  },
  numberOfPurchases: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('canteenItem', CanteenItemSchema);
