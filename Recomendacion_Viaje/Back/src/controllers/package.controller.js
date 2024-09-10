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
  const { price, from = '', to = '', catagory = "completed", limit = 8, page = 1 } = req.query

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
    .select('-roomID -meanID')
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec()


  return res.status(200).json({
    message: 'Packages found',
    data: packages
  })

})

exports.getPackagesAll = tryCatch(async (req, res, next) => {
  const { limit = 8, page = 1, category = 'completed' } = req.query

  const packages = await Package.find({
    status: category
  })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec()

  if (packages.length === 0) return res.status(404).json({
    message: 'No packages found',
    data: []
  })

  return res.status(200).json({
    message: 'Packages found',
    data: packages,
    page: page,
    limit: limit,
    total: packages.length
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

exports.createCommentPackage = tryCatch(async (req, res, next) => {
  const { id } = req.params
  const { comment, rating } = req.body

  const package = await Package.findOne({
    _id: id,
    status: 'active'
  })

  if (!package) return next(new AppError('Package not found', 404))

  package.comments.push({
    userID: req.user.id,
    content: comment,
    rating,
    date: new Date()
  })

  await package.save()

  return res.status(200).json({
    message: 'Comment added',
    data: package
  })
})