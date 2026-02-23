const express = require("express");
const Products = require("../Model/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts };
