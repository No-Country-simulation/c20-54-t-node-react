const User = require('../db/models/User')
const tryCatch = require('../util/tryCatch')

const existyUserAuth = tryCatch(async (req, res, next) => {
  const id = req.user.id

  const User = await User.findById(id)

  if (!User) {
    return res.status(400).json({ message: 'User not found' })
  }

  req.user = User
  return next()
})