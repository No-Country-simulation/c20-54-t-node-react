const express = require('express');

const router = express.Router();

// middlewares -> package
const {
  getPackages: getPackagesValidate
} = require('../middlewares/expressValidator/package.middleware')
const { auth } = require('../middlewares/auth.middleware');


// controllers -> package
const {
  getPackages,
  getPackageById,
  getPackagesAll,
  createCommentPackage
} = require('../controllers/package.controller');
const validate = require('../middlewares/validateExpress');

// routers

router.get('/', validate(getPackagesValidate), getPackages);
router.get('/:id', getPackageById);
router.get('/all', getPackagesAll);
router.post('/:id/comment', auth, createCommentPackage)

module.exports = { packageRouter: router }