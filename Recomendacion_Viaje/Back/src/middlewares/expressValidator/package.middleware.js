const { body } = require('express-validator');

exports.getPackages = [
  body('page').isInt().optional(),
  body('limit').isInt().optional(),
  body('to').isString().optional(),
  body('from').isString().optional(),
  body('status').isString().optional()
]