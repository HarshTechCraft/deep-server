const venue = require("../models/venueSearchModel");

const admin = async (req, res) => {
  try {
    const newVenueSearch = new venue({
      activity: req.body.activity,
      location: req.body.location,
      date: req.body.date,
      hotel: req.body.hotel,
      price: req.body.price,
      image: req.body.image,
      rating: req.body.rating,
      guests: req.body.guests,
      reviews: req.body.reviews,
      aboutSpace: req.body.aboutSpace
    });

    console.log(req.bo)

    // Save the new record to the database
    const savedVenue = await newVenueSearch.save();

    // Check if the save operation was successful
    if (savedVenue) {
      res
        .status(201)
        .json({ message: "Venue search added successfully", savedVenue });
    } else {
      res.status(400).json({ message: "Venue search not added" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding venue search", error });
  }
};

module.exports = admin;
