// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();

// let initialRecipe = [
//     {
//         name: 'Spaghetti Carbonara',
//         description: 'A classic Italian pasta dish.',
//         preparationTime: '15 minutes',
//         cookingTime: '15 minutes',
//         imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
//         country: 'India',
//         veg: true,
//         id: 1
//     }
// ];

// app.use(express.urlencoded({ extended: true }));

// app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Welcome to the Recipe API.');
// });
// app.get('/recipe/all', (req, res) => {
//     res.send(initialRecipe);
// });

// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
// app.get('/add', (req, res) => {
//     res.sendFile(path.join(__dirname, 'recipe.html'));
// });
// app.post('/recipe/add', (req, res) => {
//     const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

//     if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || !veg) {
//         return res.status(400).send('All fields are required.');
//     }

//     const newRecipe = {
//         id: initialRecipe.length + 1,
//         name,
//         description,
//         preparationTime,
//         cookingTime,
//         imageUrl,
//         country,
//         veg: veg === 'true'
//     };

//     initialRecipe.push(newRecipe);
//     res.send(initialRecipe);
// });
// app.patch('/recipe/update/:id', (req, res) => {
//     const { id } = req.params;
//     const recipe = initialRecipe.find(r => r.id === parseInt(id));

//     if (!recipe) return res.status(404).send('Recipe not found.');

//     Object.assign(recipe, req.body);
//     res.send(initialRecipe);
// });
// app.delete('/recipe/delete/:id', (req, res) => {
//     const { id } = req.params;
//     const index = initialRecipe.findIndex(r => r.id === parseInt(id));

//     if (index === -1) return res.status(404).send('Recipe not found.');

//     initialRecipe.splice(index, 1);
//     res.send(initialRecipe);
// });
// app.get('/recipe/filter', (req, res) => {
//     const { veg, sort, country } = req.query;

//     let filteredRecipes = initialRecipe;

//     if (veg) filteredRecipes = filteredRecipes.filter(r => r.veg.toString() === veg);
//     if (country) filteredRecipes = filteredRecipes.filter(r => r.country === country);
//     if (sort) {
//         filteredRecipes = filteredRecipes.sort((a, b) =>
//             sort === 'lth' ? a.cookingTime - b.cookingTime : b.cookingTime - a.cookingTime
//         );
//     }

//     res.send(filteredRecipes);
// });


// app.listen(8090, () => console.log('Server running on port 8090'));





const express = require('express'); // Import Express framework
const bodyParser = require('body-parser'); // Import body-parser for handling request bodies (optional here)
const path = require('path'); // Import path module for handling file paths
const app = express(); // Initialize Express app

// Initial recipes array to simulate a database
let initialRecipe = [
    {
        name: 'Spaghetti Carbonara', // Recipe name
        description: 'A classic Italian pasta dish.', // Recipe description
        preparationTime: '15 minutes', // Time required for preparation
        cookingTime: '15 minutes', // Time required for cooking
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*', // Image URL
        country: 'India', // Country of origin
        veg: true, // Whether the recipe is vegetarian
        id: 1 // Unique ID for the recipe
    }
];

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

// Route: Homepage
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API.');
});

// Route: Get all recipes
app.get('/recipe/all', (req, res) => {
    res.send(initialRecipe);
});

// Route: Serve index.html file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route: Serve recipe.html file
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'recipe.html'));
});

// Route: Add a new recipe
app.post('/recipe/add', (req, res) => {
    const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

    // Validate required fields
    if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || !veg) {
        return res.status(400).send('All fields are required.');
    }

    // Create a new recipe object
    const newRecipe = {
        id: initialRecipe.length + 1, // Assign a unique ID
        name,
        description,
        preparationTime,
        cookingTime,
        imageUrl,
        country,
        veg: veg === 'true' // Convert veg field to a boolean
    };

    initialRecipe.push(newRecipe); // Add new recipe to the array
    res.send(initialRecipe); // Return updated recipes array
});

// Route: Update a recipe by ID
app.patch('/recipe/update/:id', (req, res) => {
    const { id } = req.params; // Get recipe ID from URL params
    const recipe = initialRecipe.find(r => r.id === parseInt(id)); // Find recipe by ID

    if (!recipe) return res.status(404).send('Recipe not found.');

    // Update recipe properties with the request body
    Object.assign(recipe, req.body);
    res.send(initialRecipe); // Return updated recipes array
});

// Route: Delete a recipe by ID
app.delete('/recipe/delete/:id', (req, res) => {
    const { id } = req.params; // Get recipe ID from URL params
    const index = initialRecipe.findIndex(r => r.id === parseInt(id)); // Find index of recipe by ID

    if (index === -1) return res.status(404).send('Recipe not found.');

    initialRecipe.splice(index, 1); // Remove recipe from array
    res.send(initialRecipe); // Return updated recipes array
});

// Route: Filter recipes based on criteria
app.get('/recipe/filter', (req, res) => {
    const { veg, sort, country } = req.query; // Get query parameters

    let filteredRecipes = initialRecipe;

    // Filter by vegetarian status
    if (veg) filteredRecipes = filteredRecipes.filter(r => r.veg.toString() === veg);

    // Filter by country of origin
    if (country) filteredRecipes = filteredRecipes.filter(r => r.country === country);

    // Sort recipes by cooking time
    if (sort) {
        filteredRecipes = filteredRecipes.sort((a, b) =>
            sort === 'lth' ? a.cookingTime - b.cookingTime : b.cookingTime - a.cookingTime
        );
    }

    res.send(filteredRecipes); // Return filtered recipes array
});

// Start the server on port 8090
app.listen(8090, () => console.log('Server running on port 8090'));
