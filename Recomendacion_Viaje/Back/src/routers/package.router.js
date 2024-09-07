const express = require('express');

const router = express.Router();

// middlewares -> package
const {
  getPackages: getPackagesValidate
} = require('../middlewares/expressValidator/package.middleware')

// controllers -> package
const {
  getPackages
} = require('../controllers/package.controller');
const validate = require('../middlewares/validateExpress');

// routers

router.get('/', validate(getPackagesValidate), getPackages);

module.exports = { packageRouter: router }