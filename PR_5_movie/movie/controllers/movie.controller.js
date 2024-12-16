const Movie = require('../models/movie.schema');

// Add Movie
const createMovie = async (req, res) => {
  try {
    const { title, description, releaseDate, category, actors, image, addedBy } = req.body;
    const movie = new Movie({ title, description, releaseDate, category, actors, image, addedBy });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Movie
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Movie
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Rating
const addRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    movie.ratings.push({ value });
    await movie.save();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Comment
const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    movie.comments.push({ text });
    await movie.save();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createMovie, updateMovie, deleteMovie, addRating, addComment };
