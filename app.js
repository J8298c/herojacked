const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const port = process.env.PORT || 8080;

const app = express();
// require('./api/config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// const jwtCheck = jwt({
//   secret: jwks.ExpressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://j8298c.auth0.com/.well-known/jwks.json',
//   }),
//   audience: 'https://localhost:8080',
//   issuer: 'https://j8298c.auth0.com/',
//   algorithms: ['RS256'],
// });
// app.use(jwtCheck);

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

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = app;
