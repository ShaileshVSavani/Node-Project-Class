const Comment = require("../models/comment");

const createComment = async (req, res) => {
    const { content, author, blogPost } = req.body;
    try {
        const comment = await Comment.create({ content, author, blogPost });
        res.json(comment);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const getCommentsByBlogPost = async (req, res) => {
    try {
        const comments = await Comment.find({ blogPost: req.params.blogPostId })
        res.json(comments);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) return res.json({ error: "Comment not found" });
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.json({ error: err.message });
    }
};

module.exports = {
    createComment,
    getCommentsByBlogPost,
    deleteComment,
};
