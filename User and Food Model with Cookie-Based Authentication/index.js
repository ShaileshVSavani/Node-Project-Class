// const express = require("express");
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const path = require("path");

// const userRoutes = require("./routes/userRoutes");
// const foodRoutes = require("./routes/foodRoutes");
// const connectDB = require("./config/db");

// dotenv.config();

// const app = express();

// // Set up view engine if using EJS for rendering views
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views")); // Set the views directory

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/foods", foodRoutes);

// // Start Server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);

//   // Connect to Database
//   connectDB();
// });







const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const foodRoutes = require("./routes/foodRoutes");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const foodRouter = require("./routes/foodRoutes");

dotenv.config();

const app = express();

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Handles form submissions
app.use(cookieParser());

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, "public")));

// Mount routes
app.use("/api/users", userRouter);
app.use("/api/foods", foodRouter);

// Fallback for undefined routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB(); // Connect to the database
});
