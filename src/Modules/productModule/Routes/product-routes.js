const express = require("express");
const router = express.Router();
const { getProducts } = require("../Controller/productController");

router.get("/", getProducts);

module.exports = router;
