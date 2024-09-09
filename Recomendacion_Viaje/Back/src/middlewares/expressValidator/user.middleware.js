const { body } = require('express-validator');

exports.loginBody = [
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 5 })
    .withMessage('Username must be at least 5 characters long')
    .isString()
    .withMessage('Username must be a string'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isString()
    .withMessage('Password must be a string')

]