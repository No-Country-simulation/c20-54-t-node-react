// models
const User = require('../db/models/User')

exports.getUsers = async (req, res, next) => {
  try {

    const idUser = req.params.id

    const user = await User.findOne({ _id: idUser })
      .select('-password -createdAt -updatedAt -__v')

    if (!user) return res.status(404).json({ message: 'User not found' })

    return res.status(200).json({
      message: 'User found',
      data: user
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}