const express = require('express')

// controller
const { createReservation } = require('../controllers/reservation.controller')

// middleware
const { auth } = require('../middlewares/auth.middleware')
const { existyUserAuth } = require('../middlewares/existyUser.middleware')

const router = express.Router()

// router

router.post('/', auth, existyUserAuth, createReservation)

module.exports = { reservationRouter: router }