const express = require('express');
const { getUsers } = require('../../controller/Users.js');
const { verifyToken } = require('../../middleware/VerifyToken.js');

// import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";
 
const router = express.Router();
 
router.get('/userlist', verifyToken, getUsers);
 
module.exports = router;