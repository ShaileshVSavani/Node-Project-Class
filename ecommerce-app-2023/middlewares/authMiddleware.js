
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes (Token-based Authentication)
export const requireSignIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after 'Bearer'
    if (!token) {
      return res.status(401).send({ message: "Token not provided" });
    }

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to the request object
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(401).send({ message: "Invalid or expired token", error });
  }
};

// Admin Access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user || user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "Unauthorized Access",
      });
    }
    next();
  } catch (error) {
    console.error("Admin Middleware Error:", error.message);
    res.status(500).send({
      success: false,
      message: "Error in Admin Middleware",
      error,
    });
  }
};
