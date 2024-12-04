const express = require("express");
const {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
} = require("../controllers/blogPostController");

const router = express.Router();

router.post("/", createBlogPost);
router.get("/", getAllBlogPosts);
router.get("/:id", getBlogPostById);
router.patch("/:id", updateBlogPost);
router.delete("/:id", deleteBlogPost);

module.exports = router;
