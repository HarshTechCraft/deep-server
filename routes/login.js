const User = require("../models/users");
const jwt = require("jsonwebtoken"); // Import the jwt library

// Secret key for JWT (store this securely in your environment variables)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const login = async (req, res) => {
  const hasEmail = await User.findOne({ Email: req.body.email });
  if (hasEmail) {
    if (hasEmail.Password === req.body.password) {
      // Generate a JWT token
      const token = jwt.sign(
        { userId: hasEmail._id }, // Payload (can add more info if needed)
        JWT_SECRET, // Secret key for signing
        { expiresIn: "1d" } // Token expiry time
      );

      // Send the token as an HTTP-only cookie
      res.cookie("authToken", token, {
        httpOnly: true, // Make sure the cookie is only accessible via HTTP requests, not JS
        secure: process.env.NODE_ENV === "production", // Set secure in production mode
        sameSite: "Strict", // Protect against CSRF attacks
        maxAge: 24 * 60 * 60 * 1000, // Set expiration for 1 day
      });

      res.json({ Email: true, Password: true });
    } else {
      res.json({ Email: true, Password: false });
    }
  } else {
    res.json({ Email: false, Password: false });
  }
};

module.exports = login;
