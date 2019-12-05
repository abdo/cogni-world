const mongoose = require('mongoose');
const randToken = require('rand-token');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: String, //male or female
  type: {
    // employee, ceo, coo, ..etc
    type: String,
    default: 'employee',
  },
  department: {
    // dev, sales, ..etc
    type: String,
    default: '',
  },
  avatar: String,
  verified: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: () => randToken.generate(32),
  },
  pushNotificationToken: String,
  catering: {
    cateringBalance: {
      type: Number,
      default: 0,
    },
    itemsOrdered: {
      type: Number,
      default: 0,
    },
  },
  canteen: {
    canteenBalance: {
      type: Number,
      default: 0,
    },
    itemsOrdered: {
      type: Number,
      default: 0,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function(next) {
  console.log(this);
  if (!this.avatar) {
    if (this.gender) {
      this.avatar =
        this.gender === 'male'
          ? 'https://i.imgur.com/aJE2I7X.png'
          : 'https://i.imgur.com/Pk3PTcD.png';
    } else {
      this.avatar =
        'http://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png';
    }
  }
  next();
});

module.exports = mongoose.model('user', UserSchema);
