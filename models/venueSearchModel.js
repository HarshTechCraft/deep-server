const mongoose = require('mongoose')


const venueSearchSchema = new mongoose.Schema({
    activity: String,
    location: String,
    date: String,
    createdAt: { type: Date, default: Date.now }
})


const venue = new mongoose.model('venuesearche',venueSearchSchema)


module.exports = venue