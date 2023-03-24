const express = require('express');
const usersRoute = require("./users/index");
const authRoute = require("./auth/index");

// import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";
 
const router = express.Router();
 
router.use("/user", usersRoute);
router.use("/auth", authRoute);

 
module.exports = router;