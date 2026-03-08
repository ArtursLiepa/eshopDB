const mongoose = require("mongoose");
const { Schema } = mongoose;

const segmentSchema = new Schema({
  categoryID: { type: Number, required: true },
  categoryName: { type: String, required: true },
  segmentID: { type: Number, required: true },
  segmentName: { type: String, required: true },
  id: { type: Number, required: true },
});

const segments = mongoose.model("segments", segmentSchema);

module.exports = segments;
