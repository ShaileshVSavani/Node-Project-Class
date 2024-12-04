const BlogPost = require("../models/blogPost");

const createBlogPost = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const blogPost = await BlogPost.create({ title, content, author });
        res.json(blogPost);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find()
        res.json(blogPosts);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const getBlogPostById = async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id)
        if (!blogPost) return res.json({ error: "Blog post not found" });
        res.json(blogPost);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const updateBlogPost = async (req, res) => {
    try {
        const updatedBlogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBlogPost) return res.json({ error: "Blog post not found" });
        res.json(updatedBlogPost);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const deleteBlogPost = async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!blogPost) return res.json({ error: "Blog post not found" });
        res.json({ message: "Blog post deleted successfully" });
    } catch (err) {
        res.json({ error: err.message });
    }
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
};
