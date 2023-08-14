const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  video_id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img_url: { type: String, required: true },
  link: { type: String, required: true },
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
