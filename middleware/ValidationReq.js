const { check, validationResult } = require('express-validator');

exports.ValidationReq = [
    check('username').isLength({ min: 2 })
    .withMessage('Username Must Be at Least 2 Characters'),
    check('password').isLength({ min: 5 })
    .withMessage('Password Must Be at Least 5 Characters')
]