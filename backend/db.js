const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
