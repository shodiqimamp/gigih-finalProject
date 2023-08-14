const Video = require("../models/video");

// Mengambil semua video dari database
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addVideo = async (req, res) => {
  const video = new Video(req.body);
  try {
    const insertVideo = await video.save();
    res.status(201).json(insertVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video_id = req.params.id;
    const video = await Video.findById(video_id);
    res.json(video);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
