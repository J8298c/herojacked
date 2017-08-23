const mongoose = require('mongoose');
const Workout = require('./workout_model.js');
const Hero = require('./hero_model');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  profileImage: String,
  username: String,
  gender: String,
  favorites: [Workout],
  current_hero: [Hero],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
