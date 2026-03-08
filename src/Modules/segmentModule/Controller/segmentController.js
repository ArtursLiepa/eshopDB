const express = require("express");
const segments = require("../Model/segment");

// const getSegments = async (req, res) => {
//   try {
//     const segmentsAll = await segments.find({});
//     console.log(segmentsAll);
//     res.status(200).json(segmentsAll);
//   } catch (error) {
//     console.log(error);
//   }
// };

const getSegmentList = async (req, res) => {
  try {
    const category = req.query.categoryName;
    const exectSegmentList = await segments.find({ categoryName: category });
    console.log(exectSegmentList);
    res.status(200).json(exectSegmentList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSegmentList };
