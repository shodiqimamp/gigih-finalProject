const Comment = require("../models/comment");
const Video = require("../models/video");

// Menyimpan komentar ke database
exports.addComment = async (req, res) => {
  const comment = new Comment(req.body);
  try {
    const video_id = req.params.id;
    const video = await Video.findById(video_id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    const insertComment = await comment.save();
    res.status(201).json(insertComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mengambil komentar berdasarkan videoId dari database
exports.getComments = async (req, res) => {
  try {
    const video_id = req.params.id;
    const comment = await Comment.find({ video_id: video_id }).exec();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
