// models 
const Reservation = require('../db/models/Reservation')
const Car = require('../db/models/Car')
const Package = require('../db/models/Package')

// utils
const AppError = require('../util/AppError')
const tryCatch = require('../util/tryCatch')


exports.getReservations = tryCatch(async (req, res, next) => {
  const { limit = 8, page = 1 } = req.query

  const reservations = await Reservation.find({ userID: req.user.id })
    .populate('userID carID')
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 })

  res.status(200).json({ status: 'success', data: reservations })
})

exports.createReservation = tryCatch(async (req, res, next) => {
  const { packageID, quantity = 1, isGuest = true, guestID } = req.body


  if (isGuest && !req.body.guest) return next(new AppError('Guest data is required', 400))

  const formData = {
    userID: req.user.id,
    carID: null,
    name: isGuest ? req.body.guest.name : null,
    lastName: isGuest ? req.body.guest.lastName : null,
    email: isGuest ? req.body.guest.email : null,
    idAt: isGuest ? req.body.guest.idAt : null,
    guestID: isGuest ? guestID : null,
    status: 'pending',

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

    const newReservation = await Reservation.create({
      ...formData
    })

    const dateReservation = await Reservation.findOne({ _id: newReservation._id }).populate('userID carID')
    console.log('dateReservation ', dateReservation)
    return res.status(201).json({ status: 'success', data: dateReservation })
  }

  const car = await Car.findOne({ userID: req.user.id })

  if (!car) return next(new AppError('Car not found', 404))

  formData.carID = car._id

  const newReservation = await Reservation.create({
    ...formData
  })

  const dateReservation = await Reservation.findOne({ _id: newReservation._id }).populate('userID carID')

  console.log('dateReservation ', dateReservation)

  return res.status(201).json({ status: 'success', data: dateReservation })

})

