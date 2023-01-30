const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
// To add products
router.get("/add-product", adminController.getAddProduct);

// /admin/product => GET
// To show products in the Admin products page
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
// To show products on main page after adding products
router.post("/add-product", adminController.postAddProduct);

// To edit products
router.get("/edit-product/:productId", adminController.getEditProduct);

// TO update..edited product
router.post("/edit-product", adminController.postEditProduct);

// To delete product
router.post("/delete-product", adminController.postDeleteProduct);

exports.routes = router;
