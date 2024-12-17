const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
