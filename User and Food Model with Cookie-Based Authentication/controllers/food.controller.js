const Food = require("../models/Food.model");


// Add Food
const addFood = async (req, res) => {
    const { name, price, category, description } = req.body;

    if (!req.user) {
        res.send('Unauthorized.');
        return;
    }

    try {
        const food = new Food({
            name,
            price,
            category,
            description,
            createdBy: req.user.id
        });

        await food.save();
        res.send('Food added successfully.');
    } catch (error) {
        res.send('An error occurred: ' + error.message);
    }
};

// Get Foods
const getFoods = async (req, res) => {
    try {
        const foods = await Food.find().populate('createdBy', 'name email');
        res.send(foods);
    } catch (error) {
        res.send('An error occurred: ' + error.message);
    }
};

// Update Food
const updateFood = async (req, res) => {
    try {
        const food = await Food.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.user._id },
            req.body,
            { new: true }
        );

        if (!food) {
            res.send('Food not found or unauthorized.');
            return;
        }

        res.send('Food updated successfully.');
    } catch (error) {
        res.send('An error occurred: ' + error.message);
    }
};

module.exports ={ addFood, updateFood, getFoods}
