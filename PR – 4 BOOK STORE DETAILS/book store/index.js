// Import dependencies
const express = require('express');
const mongoose = require('mongoose');


// Initialize app and middleware
const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};
connectDB();

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

// Routes

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the book store');
});

// Get all books
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching books' });
    }
});

// Get book by ID
app.get('/books/book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching book' });
    }
});

 // Add a new book

app.post('/books/addbooks', async (req, res) => {
    const { title, author, category, publicationYear, price, quantity, description, imageUrl } = req.body;

    // Middleware for checking missing fields
    if (!title || !author || !category || !publicationYear || !price || !quantity || !description || !imageUrl) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: 'Error adding book' });
    }
});



// Delete a book by ID
app.delete('/book/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Error deleting book' });
    }
});

// Update a book by ID
app.patch('/books/update/:id', async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Error updating book' });
    }
});

// Filter books
app.get('/books/filter', async (req, res) => {
    const { author, category, title, price } = req.query;

    let filters = {};
    if (author) filters.author = author;
    if (category) filters.category = category;
    if (title) filters.title = new RegExp(title, 'i');

    try {
        let books = await Book.find(filters);

        if (price === 'lth') {
            books = books.sort((a, b) => a.price - b.price);
        } else if (price === 'htl') {
            books = books.sort((a, b) => b.price - a.price);
        }

        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Error filtering books' });
    }
});

// Start server
const PORT = 8090;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});