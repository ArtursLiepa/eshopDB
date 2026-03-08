const express = require("express");
const categories = require("../Model/categoryModel");

const getCategories = async (req, res) => {
  try {
    const category = await categories.find({});
    console.log(category);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCategories };
