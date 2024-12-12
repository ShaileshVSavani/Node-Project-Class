
const express = require('express');
const Post = require('../models/Post');
const routerPost = express.Router();

// Create Post
routerPost.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error });
  }
});

// Get All Posts
routerPost.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching posts', error });
  }
});

// Get Single Post
routerPost.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: 'Post not found', error });
  }
});

// Update Post
routerPost.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error });
  }
});

// Delete Post
routerPost.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Error deleting post', error });
  }
});

module.exports = routerPost;
