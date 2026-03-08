const express = require("express");
const router = express.Router();
const {
  getSegments,
  getSegmentList,
} = require("../Controller/segmentController");

// router.get("/", getSegments);
router.get("/", getSegmentList);

module.exports = router;
