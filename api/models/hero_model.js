const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Workouts = require('./workout_model');

const heroSchema = new Schema({
  wods: [Workouts],
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;

