const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // await mongoose.connect("mongodb://127.0.0.1:27017/blog");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};
module.exports = connectDB;
