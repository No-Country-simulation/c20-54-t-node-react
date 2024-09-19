const express = require('express')

// controller
const { createReservation, getReservations, getReservationById } = require('../controllers/reservation.controller')

// middleware
const { auth } = require('../middlewares/auth.middleware')
const { existyUserAuth } = require('../middlewares/existyUser.middleware')

const router = express.Router()

// router

router.get('/', auth, existyUserAuth, getReservations)
router.get('/:id', auth, existyUserAuth, getReservationById)
router.post('/', auth, existyUserAuth, createReservation)

module.exports = { reservationRouter: router }