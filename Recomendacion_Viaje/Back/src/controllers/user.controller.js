// models
const User = require('../db/models/User')

// AppError
const AppError = require('../util/AppError')

const tryCatch = require('../util/tryCatch')

exports.getUsers = tryCatch(async (req, res, next) => {

  const users = await User.find()
    .select('-password -createdAt -updatedAt -__v')

  return res.status(200).json({
    message: 'Users found',
    data: users
  })

})

exports.getUser = tryCatch(async (req, res, next) => {

  const { id } = req.params

  const user = await User.findById(id)
    .select('-password -createdAt -updatedAt -__v')

  if (!user) {
    return next(new AppError('User not found', 404))
  }

  return res.status(200).json({
    message: 'User found',
    data: user
  })

})