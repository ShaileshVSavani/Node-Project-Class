const express = require("express");
const {
    createComment,
    getCommentsByBlogPost,
    deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

router.post("/", createComment);
router.get("/:blogPostId", getCommentsByBlogPost);
router.delete("/:id", deleteComment);

module.exports = router;
