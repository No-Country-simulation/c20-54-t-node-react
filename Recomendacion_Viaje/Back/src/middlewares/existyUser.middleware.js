const User = require('../db/models/User')
const tryCatch = require('../util/tryCatch')

exports.existyUserAuth = tryCatch(async (req, res, next) => {
  const id = req.user.id

  console.log('id user auth ', id)

  const user = await User.findById(id)

  console.log('user auth ', user)

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  req.user = user
  return next()
})