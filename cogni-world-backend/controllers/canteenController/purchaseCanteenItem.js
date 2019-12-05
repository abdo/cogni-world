const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');
const CanteenItem = mongoose.model('canteenItem');

module.exports = (req, res) => {
  const { params } = req;

  CanteenItem.findById(params.itemId)
    .then(item => {
      if (!item) {
        const message = 'Item does not exist';
        return res.status(400).json({ message });
      }

      // item's price should be subtracted from user's canteenBalance

      User.findById(req.user._doc._id).then(user => {
        const newBalance = user.canteen.canteenBalance - item.price;
        if (newBalance < 0) {
          res.status(400).json({ message: 'Not enough balance' });
        }
        user.canteen = {
          canteenBalance: user.canteen.canteenBalance - item.price,
          itemsOrdered: user.canteen.itemsOrdered + 1,
        };
        user.save().then(() => {
          item.numberOfPurchases = item.numberOfPurchases + 1;
          item.save().then(() => {
            res.status(200).json({ success: true });
          });
        });
      });
    })
    .catch(err => {
      const message = 'Error checking database';
      return res.status(500).json({ ...err, message });
    });
};
