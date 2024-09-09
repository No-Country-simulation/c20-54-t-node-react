// models
const Package = require('../db/models/Package')
const Room = require('../db/models/Room')

// utils
const AppError = require('../util/AppError')
const tryCatch = require('../util/tryCatch')

exports.getPackageByPrice = tryCatch(async (req, res, next) => {
  const packages = await Package.find({
    precioTotal: {
      $lte: req.query.maxPrice
    }
  })

  if (packages.length === 0) return res.status(404).json({
    message: 'No packages found',
    data: []
  })

  return res.status(200).json({
    message: 'Packages found',
    data: packages
  })
})

exports.getPackages = tryCatch(async (req, res, next) => {
  const { price, from = '', to = '', limit = 8, page = 1 } = req.query

  const packages = await Package.find({
    priceTotal: {
      $lte: price
    },
    from: {
      $regex: from,
      $options: 'i'
    },
    to: {
      $regex: to,
      $options: 'i'
    }
  })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec()


  return res.status(200).json({
    message: 'Packages found',
    data: packages
  })

})

exports.getPackageById = tryCatch(async (req, res, next) => {
  console.log('get package by id ', req.params.id)
  // obtener el paquete por id pero tambien obtenemos los datos de la referencia  meanID y roomID
  const package = await Package.findOne({
    _id: req.params.id
  })

  if (!package) return next(new AppError('Package not found', 404))

  const findRoom = await Room.findOne({
    _id: package.roomID
  })

  return res.status(200).json({
    message: 'Package found',
    data: {
      package,
      room: findRoom
    }
  })
})