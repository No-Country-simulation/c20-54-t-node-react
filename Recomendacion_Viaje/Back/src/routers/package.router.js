const express = require('express');

const router = express.Router();

// middlewares -> package
const {
  getPackages: getPackageBody,
  packageComents
} = require('../middlewares/expressValidator/package.middleware')
const { auth } = require('../middlewares/auth.middleware');


// controllers -> package
const {
  getPackages,
  getPackageById,
  //getPackagesAll,
  createCommentPackage
} = require('../controllers/package.controller');
const validate = require('../middlewares/validateExpress');

// routers

router.get('/', validate(getPackageBody), getPackages);
router.get('/:id', getPackageById);
//router.get('/all', getPackagesAll);
router.post('/:id/comment', auth, validate(packageComents), createCommentPackage);
// ------- router para obtener comentario de un paquete por id ----------
// router.get('/:id/comment', createCommentPackage);

module.exports = { packageRouter: router }