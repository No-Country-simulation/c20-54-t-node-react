// models
const Package = require('../db/models/Package')

// utils
const AppError = require('../utils/AppError')
const tryCatch = require('../utils/tryCatch')

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

exports.getPackageById = tryCatch(async (req, res, next) => {
  // obtener el paquete por id pero tambien obtenemos los datos de la referencia  meanID y roomID
  const package = await Package.findById(req.params.id).populate('meanID roomID')

  if (!package) return next(new AppError('Package not found', 404))

  return res.status(200).json({
    message: 'Package found',
    data: package
  })
})