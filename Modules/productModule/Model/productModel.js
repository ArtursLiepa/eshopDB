const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    id: { type: Number, required: true },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    categoryID: { type: Number, required: true },
    categoryName: { type: String, required: true },
    segmentID: { type: Number, required: true },
    segmentName: { type: String, required: true },
    id: { type: Number, required: true },
  },
  { timestamps: true },
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
