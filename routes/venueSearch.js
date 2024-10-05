// const mongoose = require("mongoose");
// const Venue = require("../models/venueSearchModel");

// const venuesearch = async (req, res) => {
//   try {
//     const activity = req.body.inputValue;
//     const location = req.body.locationValue;

//     console.log(activity + " " + location);

//     const allData = await Venue.find({});

//     const query = {};

//     if (activity) {
//       query.activity = new RegExp(activity, "i"); 
//     }

//     if (location) {
//       query.location = new RegExp(location, "i");
//     }

//     console.log("Query:", query);

//     const results = await Venue.find(query);

    

//     res.json({ results }); 

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = venuesearch;

const mongoose = require("mongoose");
const Venue = require("../models/venueSearchModel");

const venuesearch = async (req, res) => {
  try {
    const activity = req.body.inputValue;
    const location = req.body.locationValue;

    console.log(activity + " " + location);

    // Construct the query with $or to allow matching either activity or location
    const query = {};

    const orConditions = [];

    if (activity) {
      orConditions.push({ activity: new RegExp(activity, "i") }); // Case-insensitive search
    }

    if (location) {
      orConditions.push({ location: new RegExp(location, "i") }); // Case-insensitive search
    }

    // If we have at least one condition, use $or to match any of them
    if (orConditions.length > 0) {
      query.$or = orConditions;
    }

    console.log("Query:", query);

    const results = await Venue.find(query);

    res.json({ results });

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = venuesearch;
