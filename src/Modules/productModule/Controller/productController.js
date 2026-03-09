const express = require("express");
const products = require("../Model/productModel");

const getProducts = async (req, res) => {
  try {
    const segment = req.query.segmentName;
    const productList = await products.find({ segmentName: segment });
    console.log(productList);
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const productId = req.params.productID;
    const product = await products.findOne({ productID: productId });
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, getProduct };
