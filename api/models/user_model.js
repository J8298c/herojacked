const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
    profileImage: String,
    username: String,
    gender: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
