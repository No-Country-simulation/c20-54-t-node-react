const express = require('express');

const router = express.Router();

// middlewares -> package
const {
  getRandomPackages: getPackagesValidate
} = require('../middlewares/expressValidator/package.middleware')
const { auth } = require('../middlewares/auth.middleware');


// controllers -> package
const {
  getRandomPackages,
  getPackageById,
  //getPackagesAll,
  createCommentPackage
} = require('../controllers/package.controller');
const validate = require('../middlewares/validateExpress');
const { createCommentPackage: createCommentPackagebody } = require('../middlewares/expressValidator/package.middleware');

// routers

router.get('/', validate(getPackagesValidate), getRandomPackages);
router.get('/:id', getPackageById);
//router.get('/all', getPackagesAll);
router.post('/:id/comment', auth, validate(createCommentPackagebody), createCommentPackage);

module.exports = { packageRouter: router }