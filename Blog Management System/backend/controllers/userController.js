const User = require("../models/user");

const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        res.json(user);
    } catch (err) {
        resjson({ error: err.message });
    }
};

const login = async (req, res) => {
   
};

module.exports = { signUp, login };
