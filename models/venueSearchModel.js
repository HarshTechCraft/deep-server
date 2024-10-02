const mongoose = require('mongoose');

const venueSearchSchema = new mongoose.Schema({
    activity: String,
    location: String,
    date: String,
    hotel: String,
    price: Number,
    rating: Number,
    guests: Number,
    reviews: Number,
    image: String, 
    createdAt: { type: Date, default: Date.now }
});

const venue = mongoose.model('venuesearche', venueSearchSchema);

module.exports = venue;
