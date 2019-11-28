const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const passport = require('passport');

const app = express();

// Models

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Passport Config

// Cors Middleware
app.use(cors());

// Routes
app.use('/api/info', (req, res) => res.send('Cogni World App API'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));