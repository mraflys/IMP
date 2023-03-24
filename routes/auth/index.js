const express = require('express');
const { Register, Login, Logout } = require('../../controller/Users.js');
const { check, validationResult } = require('express-validator');
const { refreshToken } = require('../../controller/RefreshToken.js');

// import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";
 var ValidationReq = [
    check('username').isLength({ min: 2 })
    .withMessage('Username Must Be at Least 2 Characters'),
    check('password').isLength({ min: 5 })
    .withMessage('Password Must Be at Least 5 Characters')
]
const router = express.Router();
 
router.post('/signup', ValidationReq, Register);
router.post('/login', ValidationReq, Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
module.exports = router;