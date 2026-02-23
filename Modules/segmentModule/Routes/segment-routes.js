const express = require("express");
const router = express.Router();
const { getSegments } = require("../Controller/segmentController");

router.get("/", getSegments);

module.exports = router;
