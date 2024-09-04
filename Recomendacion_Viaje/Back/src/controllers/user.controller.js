// models
const User = require('../db/models/User')
const tryCatch = require('../util/tryCatch')

exports.getUsers = tryCatch(async (req, res, next) => {

  const users = await User.find()
    .select('-password -createdAt -updatedAt -__v')

  return res.status(200).json({
    message: 'Users found',
    data: users
  })

})