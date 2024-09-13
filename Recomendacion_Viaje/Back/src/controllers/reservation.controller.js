// models 
const Reservation = require('../db/models/Reservation')
const Car = require('../db/models/Car')
const Package = require('../db/models/Package')

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

exports.createReservation = tryCatch(async (req, res, next) => {
  const { packageID, quantity = 1, isAuthor = true } = req.body

  if (packageID) {
    const package = await Package.findOne({ _id: packageID, status: 'active' })

    if (!package) return next(new AppError('Package not found', 404))

    const priceTotal = package.priceTotal * quantity
    const newCar = await Car.create({
      userID: req.user.id,
      items: [{ packageID, quantity }],
      priceTotal,
      packageTotal: quantity,
    })

    const reservations = new Reservation({
      userID: req.user.id,
      carID: newCar._id,
    })
  }

  const car = await Car.findOne({ userID: req.user.id })

})

