
const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product");

const productRouter = express.Router();

// Add a new product
// POST /api/products
productRouter.post("/", addProduct);

// Get all products
// GET /api/products
productRouter.get("/", getAllProducts);

// Get a product by ID
// GET /api/products/:id
productRouter.get("/:id", getProductById);

// Update a product by ID
// PUT /api/products/:id
productRouter.put("/:id", updateProductById);

// Delete a product by ID
// DELETE /api/products/:id
productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;
