const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
});

const Video = mongoose.model("Videos", videoSchema);

module.exports = Video;
