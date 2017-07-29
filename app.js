const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./api/models/user_model');
require('./api/config/passport');
const keys = require('./api/config/keys');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(keys.testDB);
} else {
  mongoose.connect(keys.dbUrl);
}

const Workouts = require('./api/models/workout_model');
require('./api/routes/workouts_routes')(app, Workouts);
require('./api/routes/auth_routes')(app);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
