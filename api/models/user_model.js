/*
 The user schema gets most of its info from the google auth
 the String for current_workout will query the db using the 
 the String as the name to the Hero workout
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  profileImage: String,
  username: String,
  gender: String,
  current_workout: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
