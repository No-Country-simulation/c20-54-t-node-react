// models 
const Reservation = require('../db/models/Reservation')

// utils
const AppError = require('../utils/AppError')
const tryCatch = require('../utils/tryCatch')


exports.getReservations = tryCatch(async (req, res, next) => {
  const { limit = 8, page = 1 } = req.query

  const reservations = await Reservation.find({ userID: req.user.id })
    .limit(limit * 1)
    .skip((page - 1) * limit)

  res.status(200).json({ status: 'success', data: reservations })
})

