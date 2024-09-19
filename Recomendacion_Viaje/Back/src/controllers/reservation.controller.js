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
    .populate({
      path: 'userID',
      select: 'name lastName email idAt'
    })
    .populate({
      path: 'carID',
      populate: {
        path: 'items.packageID',
        select: 'name description priceTotal dateStart dateEnd title city'
      }
    })
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 })

  const responseSeralize = reservations.map(reservation => {
    const { carID, ...rest } = reservation._doc
    return { ...rest, packages: carID.items }
  })

  console.log('packages ', responseSeralize, ' items ', responseSeralize[0].packages)

  res.status(200).json({ status: 'success', data: responseSeralize })
})

exports.getReservationById = tryCatch(async (req, res, next) => {
  const { id } = req.params

  const reservation = await Reservation.findOne({ _id: id, userID: req.user.id })
    .populate({
      path: 'userID',
      select: 'name lastName email idAt'
    })
    .populate({
      path: 'carID',
      populate: {
        path: 'items.packageID',
        select: 'name description priceTotal dateStart dateEnd title city'
      }
    })

  if (!reservation) return next(new AppError('Reservation not found', 404))

  const { carID, ...rest } = reservation._doc
  const packages = carID.items

  res.status(200).json({ status: 'success', data: { ...rest, packages } })
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

    const dataReservation = await Reservation.findOne({ _id: newReservation._id })
      .populate({
        path: 'userID',
        select: 'name lastName email idAt'
      })
      .populate({
        path: 'carID',
        populate: {
          path: 'items.packageID',
          select: 'name description priceTotal dateStart dateEnd title city'
        }
      })
    return res.status(201).json({ status: 'success', data: dataReservation })
  }

  const car = await Car.findOne({ userID: req.user.id })

  if (!car) return next(new AppError('Car not found', 404))

  formData.carID = car._id

  const newReservation = await Reservation.create({
    ...formData
  })

  const dataReservation = await Reservation.findOne({ _id: newReservation._id })
    .populate({
      path: 'userID',
      select: 'name lastName email idAt'
    })
    .populate({
      path: 'carID',
      populate: {
        path: 'items.packageID',
        select: 'name description priceTotal dateStart dateEnd title city'
      }
    })

  const responseSeralize = dataReservation.map(reservation => {
    const { carID, ...rest } = reservation._doc
    return { ...rest, packages: carID.items }
  })

  return res.status(201).json({ status: 'success', data: responseSeralize })

})

