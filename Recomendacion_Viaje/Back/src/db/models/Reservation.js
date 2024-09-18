const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  carID: {
    type: Schema.Types.ObjectId,
    ref: 'Package',
    required: true
  },
  isGuest: {
    type: Boolean,
    default: false
  },
  username: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  idAt: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false
  },
  birthDate: {
    type: Date,
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);