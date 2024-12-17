// middlewares/roleMiddleware.js

const checkRole = (roles) => {
    return (req, res, next) => {
        const { userRole } = req.cookies; // Assuming role is stored in cookies after login
        if (!roles.includes(userRole)) {
            res.send("Access denied: insufficient permissions.");
            return;
        }
        next();
    };
};

module.exports = { checkRole };
