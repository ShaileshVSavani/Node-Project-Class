const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();


const app = express();
app.use(express.json());
app.use(require("cors")());

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/blogPosts", require("./routes/blogPostRoutes"));
app.use("/comments", require("./routes/commentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDB();
});
