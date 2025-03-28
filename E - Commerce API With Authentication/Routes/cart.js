
const {Router} = require("express");
const isAuthenticated = require("../Middlewares/Auth");
const { addToCart, userCart, removeProductFromCart, clearCart, decreaseProductQty } = require("../Controllers/cart");

const cartRouter = Router();

// add to cart
// @api - /api/cart/add
cartRouter.post("/add", isAuthenticated, addToCart);

// get user cart
cartRouter.get("/user", isAuthenticated, userCart);

// remove product from cart
cartRouter.delete("/remove/:productId", isAuthenticated, removeProductFromCart);

// clear cart
cartRouter.delete("/clear", isAuthenticated, clearCart);

// decrease qty
cartRouter.post("/--qty", isAuthenticated, decreaseProductQty);

module.exports = cartRouter;
