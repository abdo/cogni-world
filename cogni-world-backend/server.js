const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbConnect');

// Passport Config
app.use(passport.initialize());
require('./config/passport')(passport);

// Cors Middleware
app.use(cors());

// Routes
app.use('/info', (req, res) => res.send('Cogni World App API'));
app.use('/api/user', require('./routes/user'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
