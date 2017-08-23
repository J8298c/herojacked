const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Workouts = require('./workout_model');


const HeroSchema = new Schema({
  workouts: [Workouts],
});

const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;

/*
    HeroSchema takes an array of workouts to create
    a workout routine for user
 */
