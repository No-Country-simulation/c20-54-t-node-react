const express = require('express');

const router = express.Router();

// middlewares -> package
const {
  getPackages: getPackagesValidate
} = require('../middlewares/expressValidator/package.middleware')

// controllers -> package
const {
  getPackages,
  getPackageById
} = require('../controllers/package.controller');
const validate = require('../middlewares/validateExpress');

// routers

router.get('/', validate(getPackagesValidate), getPackages);
router.get('/:id', getPackageById);

module.exports = { packageRouter: router }