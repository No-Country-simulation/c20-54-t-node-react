const express = require('express')

// controller
const { createReservation, getReservations } = require('../controllers/reservation.controller')

// middleware
const { auth } = require('../middlewares/auth.middleware')
const { existyUserAuth } = require('../middlewares/existyUser.middleware')

const router = express.Router()

// router

router.get('/', auth, existyUserAuth, getReservations)
router.get('/:id', auth, existyUserAuth, getReservations)
router.post('/', auth, existyUserAuth, createReservation)

module.exports = { reservationRouter: router }