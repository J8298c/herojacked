const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const port = process.env.PORT || 8080;

const app = express();
const workoutRoute = require('./api/routes/workouts_routes');
const Workouts = require('./api/models/workout_model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'yummylittledebbies',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/thunderhammer');

workoutRoute(app, Workouts);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
