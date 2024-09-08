// models
import * as next from 'next'
import * as next from 'next'
const Car = require('../db/models/Car')
const Package = require('../db/models/Package')

// utils
const AppError = require('../util/AppError')
const tryCatch = require('../util/tryCatch')

exports.getCar = tryCatch(async (req, res, next) => {
  const car = await Car.findOne({ userID: req.user.id, status: 'pending' }).populate('items.packageID')

  if (!car) return next(new AppError('Car not found', 404))

  return res.status(200).json({ status: 'success', data: car })
})

exports.addPackageCar = tryCatch(async (req, res, next) => {
  const packageID = req.body.packageID

  const car = await Car.findOne({ status: 'pending' })

  if (!car) {
    const newCar = await Car.create({
      userID: req.user.id,
      items: [{ packageID, quantity: 1 }],
      total: 0,
    })

    return res.status(201).json({ status: 'success', data: newCar })
  }

  const findPackage = await Package.findOne({ _id: packageID })

  if (!findPackage) return next(new AppError('Package not found', 404))

  await car.updateOne({ $push: { items: { packageID, quantity: 1 } }, total: car.total + findPackage.priceTotal })

  await car.save()

  return res.status(200).json({ status: 'success', data: car })
})

exports.removePackageCar = tryCatch(async (req, res, next) => {
  const packageID = req.body.packageID

  const car = await Car.findOne({ status: 'pending' })

  if (!car) return next(new AppError('Car not found', 404))

  const findPackage = await Package.findOne({ _id: packageID })

  if (!findPackage) return next(new AppError('Package not found', 404))

  const packageInCar = car.items.find((item) => item.packageID.toString() === packageID)

  if (!packageInCar) return next(new AppError('Package not found in car', 404))

  if (packageInCar.quantity > 1) {
    await car.updateOne({ $set: { 'items.$[elem].quantity': packageInCar.quantity - 1 } }, { arrayFilters: [{ 'elem.packageID': packageID }] })
  } else {
    await car.updateOne({ $pull: { items: { packageID } } })
  }

  await car.updateOne({ $pull: { items: { packageID } }, total: car.total - findPackage.priceTotal })

  await car.save()

  return res.status(200).json({ status: 'success', data: car })
})