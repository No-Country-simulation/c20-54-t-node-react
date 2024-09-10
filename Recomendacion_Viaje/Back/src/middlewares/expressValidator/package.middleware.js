const { body, query } = require('express-validator');

exports.getPackages = [
  query('price').optional().isNumeric().withMessage('price must be a number value'),
  query('from').optional().isString().withMessage('form must be a string value'),
  query('to').optional().isString().withMessage('to must be a string value'),
  query('category').optional().isString().withMessage('category must be a string value'),
  query('page').optional().isNumeric().withMessage('page must be a number value'),
  query('limit').optional().isNumeric().withMessage('limit must be a number value')
]