const express = require("express");
const Items = require("../Models/items");

const getItems = async (req, res) => {
  try {
    const items = await Items.find({});
    console.log(items);
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getItems };
