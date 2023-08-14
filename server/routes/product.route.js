// routes/videoRoutes.js
const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.post("/videos/:id/product", productController.addProduct);
router.get("/videos/:id/product", productController.getProducts);
module.exports = router;
