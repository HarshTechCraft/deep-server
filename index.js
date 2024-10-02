const mongoose = require("mongoose");
const config = require("./config/keys");
const express = require('express');
const signup = require('./routes/signup')
const login = require('./routes/login')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const venuesearch = require("./routes/venueSearch");


require("./models/users");
app.use(cors());

mongoose
  .connect(`${config.MongoUrl}`)
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((e) => {
    console.log("Error is " + e);
  });

const port = process.env.port || 5000;
app.use(bodyParser.json());

app.post('/signup',signup);
app.post('/login',login);
app.post('/venuesearch', venuesearch)


app.listen(port, () => {
    console.log('http://localhost:5000');
})



