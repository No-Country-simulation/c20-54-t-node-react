// models
import * as next from 'next'
import * as next from 'next'
const Car = require('../db/models/Car')
const Package = require('../db/models/Package')

// utils
const AppError = require('../util/AppError')
const tryCatch = require('../util/tryCatch')

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