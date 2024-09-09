// models
const User = require('../db/models/User')

// jsonwebtoken
const jwt = require('jsonwebtoken')

// bcryptjs
const bcrypt = require('bcryptjs')

// AppError
const AppError = require('../util/AppError')

// dotenv
require('dotenv').config()

const tryCatch = require('../util/tryCatch')

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

exports.loginUser = tryCatch(async (req, res, next) => {

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return next(new AppError('User not found', 404))
  }

  const isMatch = bcrypt.compareSync(password, user.password)

  if (!isMatch) {
    return next(new AppError('Invalid credentials', 401))
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

  user.password = undefined

  return res.status(200).json({
    message: 'User logged in',
    data: {
      user,
      token
    }
  })

})

exports.registerUser = tryCatch(async (req, res, next) => {

  const { name, lastName, dateBirth, idAt, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    return next(new AppError('User already exists', 400))
  }

  const hasPassword = bcrypt.hashSync(password, 10)

  const user = await User.create({
    name,
    lastName,
    dateBirth,
    idAt,
    email,
    password: hasPassword
  })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

  user.password = undefined

  return res.status(201).json({
    message: 'User created',
    data: {
      user,
      token
    }
  })

})