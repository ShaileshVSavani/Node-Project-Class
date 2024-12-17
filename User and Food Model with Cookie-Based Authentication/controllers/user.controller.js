



// controllers/userController.js
// const User = require("../models/User.model");

// Signup
// Login
// const login = async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.send('Email and password are required.');
//     }

//     try {
//         const user = await User.findOne({ email, password });
//         if (!user) {
//             return res.send('Invalid credentials.');
//         }

//         res.cookie('userId', user.id); // Set cookie with user ID

//         res.redirect('/'); // Redirect to dashboard or home page
//     } catch (error) {
//         res.send('An error occurred: ' + error.message);
//     }
// };






const User = require("../models/User.model");

const signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        res.send("All fields are required.");
        return;
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.send("Email already exists.");
            return;
        }

        // Only allow admin role if the user is already an admin
        const isAdmin = req.cookies.userRole === "admin";
        const newRole = isAdmin && role === "admin" ? "admin" : "user";

        const user = new User({ name, email, password, role: newRole });
        await user.save();

        res.send("User registered successfully!");
    } catch (error) {
        res.send("An error occurred: " + error.message);
    }
};





const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.send("Email and password are required.");
        return;
    }

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            res.send("Invalid credentials.");
            return;
        }

        // Set cookies for user ID and role
        res.cookie("userId", user.id);
        res.cookie("userRole", user.role);

        res.send("Login successful.");
    } catch (error) {
        res.send("An error occurred: " + error.message);
    }
};



// Logout
const logout = (req, res) => {
    res.clearCookie('userId');
    res.send('Logout successful.');
};

module.exports = { signup, login, logout };
