const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  video_id: { type: String, required: true },
  name: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment;
