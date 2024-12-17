const {Router} = require('express');
const { createMovie, updateMovie, deleteMovie, addRating, addComment, movieFilter } = require('../controllers/movie.controller');
const checkAdmin = require('../middlewares/checkAdmin.middleware');
const movieRouter = Router();

movieRouter.post('/create', createMovie);
movieRouter.patch('/update/:id', updateMovie);
movieRouter.delete('/delete/:id', checkAdmin, deleteMovie);
movieRouter.patch('/rating/:id', addRating);
movieRouter.patch('/comment/:id', addComment);
movieRouter.get('/filter',movieFilter) 

module.exports = movieRouter;
