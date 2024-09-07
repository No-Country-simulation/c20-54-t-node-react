const express = require('express');

const router = express.Router();

// controllers -> package
const {
  getPackages
} = require('../controllers/package.controller');

// routers

router.get('/', getPackages);

module.exports = { packageRouter: router }