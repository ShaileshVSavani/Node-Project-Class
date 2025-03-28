

const Product = require("../models/product");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product, success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ message: "Fetched all products", products, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    res.json({ message: "Fetched specific product", product, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Update product by ID
const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product)
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    res.json({
      message: "Product updated successfully",
      product,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// Delete product by ID
const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    res.json({ message: "Product deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
