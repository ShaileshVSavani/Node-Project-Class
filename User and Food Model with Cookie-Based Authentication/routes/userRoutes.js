

// // routes/userRoutes.js
// const {Router} = require('express');
// const { signup, login, logout } = require('../controllers/user.controller');

// const userRouter = Router();


// // Render the index (home) page
// userRouter.get('/api/users', (req, res) => {
//     res.render('index');  // Render the home page with navbar
// });

// // Render Signup page
// userRouter.get('/api/users/signup', (req, res) => {
//     res.render('signup');  // Renders the signup form
// });

// // Render Login page
// userRouter.get('/api/users/login', (req, res) => {
//     res.render('login');  // Renders the login form
// });

// // Handle Signup
// userRouter.post('/signup', signup);

// // Handle Login
// userRouter.post('/login', login);

// // Handle Logout
// userRouter.post('/logout', logout);

// module.exports = userRouter;









// const { Router } = require("express");
// const { signup, login, logout } = require("../controllers/user.controller");

// const userRouter = Router();


// // Render the index (home) page
// userRouter.get('/', (req, res) => {
//     res.render('index');  // Render the home page with navbar
// });

// // Render Signup page
// userRouter.get("/signup", (req, res) => {
//     res.render("signup");  // Renders the signup form
// });

// // Render Login page
// userRouter.get("/login", (req, res) => {
//     res.render("login");  // Renders the login form
// });

// // Handle Signup
// userRouter.post("/signup", signup);

// // Handle Login
// userRouter.post("/login", login);

// // Handle Logout
// userRouter.post("/logout", logout);

// module.exports = userRouter;





const { Router } = require("express");


const userRouter = Router();

// Render the index (home) page
userRouter.get("/", (req, res) => {
    console.log("Serving Home Page"); // Debug
    res.render("index"); // Render the home page
});

// Render Signup page
userRouter.get("/signup", (req, res) => {
    res.render("signup"); // Render signup form
});

// Render Login page
userRouter.get("/login", (req, res) => {
    res.render("login"); // Render login form
});

// Handle Signup
userRouter.post("/signup", signup);

// Handle Login
userRouter.post("/login", login);

// Handle Logout
userRouter.post("/logout", logout);

module.exports = userRouter;
