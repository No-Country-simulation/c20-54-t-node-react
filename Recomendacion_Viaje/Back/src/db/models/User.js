const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  dateBirth: Date,
  idAt: String,
  email: String,
  password: String,
  role: String,
  rol: {
    type: String,
    default: "user",
  },
  status: {
    type: Boolean,
    default: true,
  },
})

module.exports = mongoose.model('User', userSchema)