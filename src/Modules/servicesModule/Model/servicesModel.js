const mongoose = require("mongoose");
const { Schema } = mongoose;

const servicesSchema = new Schema(
  {
    servicesID: { type: Number, required: true },
    servicestName: { type: String, required: true },
    servicesPrice: { type: Number, required: true },
    serviceCategoryID: { type: Number, required: true },
    serviceCategoryName: { type: String, required: true },
    serviceSegmentID: { type: Number, required: true },
    serviceSegmentName: { type: String, required: true },
  },
  { timestamps: true },
);

const services = mongoose.model("services", servicesSchema);

module.exports = services;
