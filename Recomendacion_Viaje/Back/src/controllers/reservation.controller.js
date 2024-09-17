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
  const { packageID, quantity = 1, isGuest = true, guestID } = req.body


  if (isGuest && !req.body.guest) return next(new AppError('Guest data is required', 400))

  const formData = {
    userID: req.user.id,
    carID: null,
    isGuest,
    guest: guestID ? null : {
      userID: req.user.id,
      username: req.body.guest.username || null,
      name: req.body.guest.name,
      lastName: req.body.guest.lastName,
      email: req.body.guest.email,
      birthDate: req.body.guest.birthDate,
    }
  }

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

    formData.carID = newCar._id

    const reservations = new Reservation({
      ...formData
    })

    await reservations.save()

    return res.status(201).json({ status: 'success', data: reservations })
  }

  const car = await Car.findOne({ userID: req.user.id })

  if (!car) return next(new AppError('Car not found', 404))

  formData.carID = car._id

  new Reservation({
    ...formData
  }).save()

})

