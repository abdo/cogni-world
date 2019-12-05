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
  avatar: {
    type: String,
    default:
      'https://www.packingsolution.co.uk/wp-content/uploads/2017/08/93267427.jpg',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('canteenItem', CanteenItemSchema);
