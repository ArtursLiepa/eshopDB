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

module.exports = { getProducts };
