const { Router } = require("express");
const {register, login} = require("../Controllers/user")

const userRouter = Router();

// register
// @api - /api/user/register
userRouter.post("/register", register);

// login
// @api - /api/user/login
userRouter.post("/login", login);

module.exports = userRouter;
