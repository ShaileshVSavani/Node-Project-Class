
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route to get all recipes
router.get('/all', recipeController.getAllRecipes);

// Route to add a new recipe
router.post('/add', recipeController.addRecipe);

// Route to update a recipe by ID
router.patch('/update/:id', recipeController.updateRecipe);

// Route to delete a recipe by ID
router.delete('/delete/:id', recipeController.deleteRecipe);

// Route to filter recipes based on query parameters
router.get('/filter', recipeController.filterRecipes);

module.exports = router;


