const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },    
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
