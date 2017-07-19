const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const port = process.env.PORT || 8080;

const app = express();
require('./api/config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'yummylittledebbies',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
mongoose.Promise = global.Promise;

const DB = require('./api/config/db');

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(DB.testDB);
} else {
  mongoose.connect(DB.dbUrl);
}

const Workouts = require('./api/models/workout_model');
const User = require('./api/models/user_model');
require('./api/routes/workouts_routes')(app, Workouts);
require('./api/routes/user_routes')(app, passport, User);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
