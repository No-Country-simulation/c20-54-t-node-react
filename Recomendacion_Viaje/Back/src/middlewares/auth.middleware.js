const jwt = require('jsonwebtoken');

// utils
const tryCatch = require('../util/tryCatch');
const AppError = require('../util/AppError');

require('dotenv').config();

exports.auth = tryCatch(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else {
    return next(new AppError('error auth', 403));
  }

  const verified = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(new AppError('error auth', 403));
    } else {
      return decoded
    }
  });

  req.user = verified;
  next();
})