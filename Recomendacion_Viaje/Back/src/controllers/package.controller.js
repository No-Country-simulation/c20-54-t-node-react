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