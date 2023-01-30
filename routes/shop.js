const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

// This is for index/main page products view
router.get("/", shopController.getIndex);

// This is for all products view
router.get("/products", shopController.getProducts);

// This is for single product view
router.get("/products/:productId", shopController.getProduct);

// This is for my cart view
router.get("/cart", shopController.getCart);

// This is to add to my cart
router.post("/cart", shopController.postCart);

// this is for deleting products from the cart
router.post("/cart-delete-item", shopController.postCartDeleteProduct);

// This is for my order view
router.post("/create-order", shopController.postOrder);

// This is for checkout view
router.get("/orders", shopController.getOrders);

module.exports = router;
