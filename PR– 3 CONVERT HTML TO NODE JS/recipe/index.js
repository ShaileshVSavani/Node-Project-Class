const express = require('express');
const path = require('path');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static file serving
app.use(express.static(path.join(__dirname, 'views')));

// Base route
app.get('/', (req, res) => res.send('Welcome to the Recipe API.'));

// Register routes
app.use('/recipe', recipeRoutes);

// Serve index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve add recipe page
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'recipe.html'));
});

// Start server
const PORT = 8090;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

