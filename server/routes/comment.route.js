const express = require("express");
const commentController = require("../controllers/comment.controller");

const router = express.Router();

router.get("/videos/:id/comments", commentController.getComments);
router.post("/videos/:id/comments", commentController.addComment);

module.exports = router;
