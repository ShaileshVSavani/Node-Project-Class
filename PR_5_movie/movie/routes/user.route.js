const express = require('express');
const { signup, login, getAllUsers, deleteUser } = require('../controllers/user.controller'); 
const { validateRequest } = require('../middlewares/user.middleware');
const router = express.Router();

router.post('/signup', validateRequest, signup);
router.post('/login', login);
router.get('/', getAllUsers);
router.delete('/delete/:id', deleteUser); 
module.exports = router;
