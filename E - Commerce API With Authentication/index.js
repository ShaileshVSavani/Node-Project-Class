
const express = require("express");
const userRouter = require("./Routes/user");
const productRouter = require("./Routes/product");
const cartRouter = require("./Routes/cart");
const connectDB = require("./config/db");
// const cors = require("cors");


require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());



// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});

// Start Server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // Connect to database
  connectDB();
});
