

const Movie = require("../models/movie.schema");

// Add Movie
const createMovie = async (req, res) => {
  const { title, addedBy, releaseDate, category } = req.body;

  if (!title || !addedBy || !releaseDate || !category) {
    return res.status(400).json({ error: "all fields are required" });
  }

  try {
    const newMovie = new Movie({ title, addedBy, releaseDate, category });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Movie
const updateMovie =  async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: "movie not found" });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ error: "movie not found" });
    }
    res.status(200).json({ message: "movie deleted successfully", movie: deletedMovie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Rating
const addRating = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;

  if (typeof rating !== 'number' || rating < 0 || rating > 10) {
    return res.status(400).json({ error: "rating must be a number between 0 and 10" });
  }

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "movie not found" });
    }
    movie.rating = rating;
    await movie.save();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Comment
const addComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ error: "comment is required" });
  }

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "movie not found" });
    }
    movie.comments.push(comment);
    await movie.save();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /movie/filter
const movieFilter = async (req, res) => {
  const { title, addedBy, releaseDate, category } = req.query;

  try {
    const query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (addedBy) query.addedBy = { $regex: addedBy, $options: 'i' };
    if (releaseDate) query.releaseDate = releaseDate;
    if (category) query.category = { $regex: category, $options: 'i' };

    const movies = await Movie.find(query);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createMovie, updateMovie, deleteMovie, addRating, addComment, movieFilter }
