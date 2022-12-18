import express from "express";
import cartController from "../controllers/cart.controller";
import authJWT from "../middleware/auth";

const cartRoutes = express.Router();

// Add product to cart
cartRoutes.post('/addToCart/:cartId', authJWT.verifyToken, cartController.addProductToCartController);

// Delete product from cart
cartRoutes.delete('/deleteFromCart/:cartId/:userId', authJWT.verifyToken, cartController.deleteProductFromCartController);

export default cartRoutes; 