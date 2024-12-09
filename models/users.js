const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
});

const USER = new mongoose.model("UserCredentials", userSchema);

module.exports = USER;
