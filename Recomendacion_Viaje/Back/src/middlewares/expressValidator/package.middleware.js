const { body, query } = require('express-validator');

exports.getPackages = [
  query('price').optional().isNumeric().withMessage('price must be a number value'),
  query('from').optional().isString().withMessage('form must be a string value'),
  query('to').optional().isString().withMessage('to must be a string value')
]