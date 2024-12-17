const User = require("../models/User.model");


 const authenticate = async (req, res, next) => {
    const {userId} = req.cookies;

    if (!userId) {
        res.send('Unauthorized.');
        return;
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            res.send('Invalid session.');
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        res.send('An error occurred: ' + error.message);
    }
};

module.exports = authenticate;

