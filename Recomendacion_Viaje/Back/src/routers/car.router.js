const app = require('express');

// controllers -> car
const { getCar } = require('../controllers/car.controller')

// middleware
const { auth } = require('../middlewares/auth.middleware')

const router = app.Router();

// router

router.get('/car', auth, getCar)
