const mongoose = require("mongoose");
const User = require("../models/users");
var db = mongoose.connection;

const signup = async (req, res) => {
  console.log(req);
  const data = {
    Email: req.body.Email,
    Password: req.body.Password,
    Name: req.body.name,
  };

  const hasEmail = await User.findOne({ Email: req.body.Email });

  if (hasEmail) {
    console.log("User details already exist");
    res.json({ signup: false });
  } else {
    db.collection("usercredentials").insertOne(data, (err, res) => {
      if (err) console.log(err);
      console.log("inserted new user to database");
    });
    res.json({ signup: true });
  }
};

module.exports = signup;
