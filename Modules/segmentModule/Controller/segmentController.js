const express = require("express");
const Segments = require("../Model/segment");

const getSegments = async (req, res) => {
  try {
    const segments = await Segments.find({});
    console.log(segments);
    res.status(200).json(segments);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSegments };
