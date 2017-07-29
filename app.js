const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./api/config/passport');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

mongoose.Promise = global.Promise;

const DB = require('./api/config/db');

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(DB.testDB);
} else {
  mongoose.connect(DB.dbUrl);
}

const Workouts = require('./api/models/workout_model');
require('./api/routes/workouts_routes')(app, Workouts);
require('./api/routes/auth_routes')(app);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
