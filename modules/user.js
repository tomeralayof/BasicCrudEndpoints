const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    minlength:5
  },
  lastName: {
    type:String,
    minlength:5
  },
  age: {
    type:String
  },
  gender: {
    type: String
  },
  tandcs: {
    type: Boolean
  },
  email: String
});

const User = mongoose.model('User', userSchema);


module.exports = User;