const mongoose = require('mongoose');
const { mongoURI } = require('../keys.secret');

const mongoConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(mongoURI, mongoConfig)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to database', err));
