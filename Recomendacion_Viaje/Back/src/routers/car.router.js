const app = require('express');

// controllers -> car
const { getCar, addPackageCar, removePackageCar, buyCar } = require('../controllers/car.controller')

// middleware
const { auth } = require('../middlewares/auth.middleware')

const router = app.Router();

// router

router.get('/car', auth, getCar)

router.post('/car', auth, addPackageCar)

router.delete('/car', auth, removePackageCar)

router.put('/car/buy', auth, buyCar)

module.exports = { carRouter: router }
