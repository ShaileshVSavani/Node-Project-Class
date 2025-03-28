
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const isAuthenticated = async (req, res, next) => {
  try {
    // Retrieve the token from the Authorization header
    const authHeader = req.header("Authorization");
    if (!authHeader)
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });

    // The token is typically sent as "Bearer <token>", so we split to extract the actual token
    const token = authHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ message: "Access denied. Invalid token format." });

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Find the user associated with the token
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    // Attach the user object to the request for use in subsequent middleware/routes
    req.user = user;
    next();
  } catch (error) {
    // Handle specific JWT errors
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Session expired. Please log in again." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token. Access denied." });
    } else {
      // Generic error response
      return res.status(500).json({ message: "An internal error occurred." });
    }
  }
};

module.exports = isAuthenticated;
