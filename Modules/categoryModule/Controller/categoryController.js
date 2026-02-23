const express = require("express");
const Categories = require("../Model/categoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find({});
    console.log(categories);
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCategories };
