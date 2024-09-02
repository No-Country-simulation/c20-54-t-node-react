const dotenv = require('dotenv');
dotenv.config();

const globalError = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(error.statusCode).json({
      status: error.status,
      error: error,
      message: error.message,
      stack: error.stack,
    });
  }

  if (process.env.NODE_ENV === 'production') {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }
}