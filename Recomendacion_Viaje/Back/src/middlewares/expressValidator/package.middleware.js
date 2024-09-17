const { body, query, param } = require('express-validator');

exports.getPackages = [
  query('price').optional().isNumeric().withMessage('price must be a number value'),
  query('from').optional().isString().withMessage('form must be a string value'),
  query('to').optional().isString().withMessage('to must be a string value'),
  query('category').optional().isString().withMessage('category must be a string value'),
  query('page').optional().isNumeric().withMessage('page must be a number value'),
  query('limit').optional().isNumeric().withMessage('limit must be a number value'),
  query('sort').optional().isString().withMessage('sort must be a string value')
]


//Validador de los request para crear un comentario
//cuales son los request que se deben de enviar?
/*
{
  "comment": "string",
  "rating": "float"
}
*/

exports.packageComents = [
  param('id')
    .notEmpty()
    .withMessage('Id is required')
    .isString()
    .withMessage('Id must be a string'),
  body('comment')
    .notEmpty()
    .withMessage('Comment cannot be empty')
    .isString()
    .withMessage('comment must be a string')
    .isLength({ min: 10, max: 200 })
    .withMessage('Comment must be between 10 and 200 characters'),
  body('rating')
    .notEmpty()
    .withMessage('Rating is required')
    .isNumeric()
    .withMessage('Rating must be a float value')
    .isFloat({ min: 1.0, max: 5.0 })
    .withMessage('Rating must be between 1 and 5')
];