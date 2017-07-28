const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./api/config/keys');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    }, 
    accessToken => {
      console.log(accessToken);
    }));

mongoose.Promise = global.Promise;

const DB = require('./api/config/db');

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(DB.testDB);
} else {
  mongoose.connect(DB.dbUrl);
}

const Workouts = require('./api/models/workout_model');
// const User = require('./api/models/user_model');
require('./api/routes/workouts_routes')(app, Workouts);
// require('./api/routes/user_routes')(app, passport, User);
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
