const { body } = require('express-validator');

exports.loginUser = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isString()
    .withMessage('Password must be a string')

]

exports.registerUser = [
  body('name')
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 5 })
    .withMessage('Username must be at least 5 characters long')
    .isString()
    .withMessage('Username must be a string'),
  body('lastName')
    .notEmpty()
    .withMessage('Last Name is required')
    .isString()
    .withMessage('Last Name must be a string'),
  body('dateBirth')
    .notEmpty()
    .withMessage('Date of Birth is required'),
  body('idAt')
    .notEmpty()
    .withMessage('Gender is required')
    .isString()
    .withMessage('Gender must be a string'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isString()
    .withMessage('Password must be a string')
]

