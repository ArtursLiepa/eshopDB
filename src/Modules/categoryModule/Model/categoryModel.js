const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryID: { type: Number, required: true },
  categoryName: { type: String, required: true },
  id: { type: Number, required: true },
});

const categories = mongoose.model("categories", categorySchema);

module.exports = categories;
