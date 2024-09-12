// models
const Package = require('../db/models/Package')
const Room = require('../db/models/Room')
const Mean = require('../db/models/Mean')
const Hosting = require('../db/models/Hosting')
const Transport = require('../db/models/Transport')

// utils
const AppError = require('../util/AppError')
const tryCatch = require('../util/tryCatch')


exports.getPackages = tryCatch(async (req, res, next) => {
  const { to = '', price = 0, catagory = "all", limit = 8, page = 1 } = req.query

  console.log(' price ', price)

  const query = {}

  if (price) {
    query.priceTotal = {
      $lte: price
    }
  }
  if (catagory) {
    query.category = {
      $regex: catagory,
      $options: 'i'
    }
  }
  if (to) {
    query.to = {
      $regex: to,
      $options: 'i'
    }
  }
  if (catagory === "all") {
    delete query.category
  }

  const packages = await Package.find(query)
    .limit(limit * 1)
    .skip((+page - 1) * limit)
    .exec()

  const totalDocPackage = await Package.countDocuments(query)
  const totalPages = Math.ceil(totalDocPackage / limit)
  const hasNextPage = +page < totalPages
  const hasPrevPage = +page > 1

  return res.status(200).json({
    status: 'success',
    results: packages.length,
    page: page,
    nextPage: hasNextPage ? +page + 1 : null,
    prevPage: hasPrevPage ? +page - 1 : null,
    totalPages: totalPages,
    data: {
      packages
    }
  });
});

exports.getPackageById = tryCatch(async (req, res, next) => {
  console.log('get package by id ', req.params.id)
  // obtener el paquete por id pero tambien obtenemos los datos de la referencia  meanID y roomID
  const package = await Package.findOne({
    _id: req.params.id
  }).populate({
    path: 'roomID',
    populate: {
      path: 'hostingID'
    }
  }).populate('meanID')

  if (!package) return next(new AppError('Package not found', 404))

  return res.status(200).json({
    message: 'Package found',
    data: {
      package,
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

// crear controlador para obtener comentarios de un paquete por id