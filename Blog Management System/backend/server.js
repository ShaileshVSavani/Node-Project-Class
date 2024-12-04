const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const blogPostRoutes = require("./routes/blogPostRoutes");
const commentRoutes = require("./routes/commentRoutes");

dotenv.config();


const app = express();
app.use(express.json());
app.use(require("cors")());

// Routes
app.use("/users", userRoutes);
app.use("/blogPosts", blogPostRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDB();
});
