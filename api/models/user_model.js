const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

userSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.password);

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;

