const { Router} = require('express');
const authenticate = require('../middlewares/auth');
const { addFood, getFoods, updateFood } = require('../controllers/food.controller');


const foodRouter = Router();

foodRouter.post('/', authenticate, addFood);
foodRouter.get('/', authenticate, getFoods);
foodRouter.patch('/:id', authenticate, updateFood);

module.exports = foodRouter;
