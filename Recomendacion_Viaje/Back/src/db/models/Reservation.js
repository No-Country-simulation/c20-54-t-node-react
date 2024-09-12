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
  isAuthor: {
    type: Boolean,
    default: true
  },
  guestID: {
    type: Schema.Types.ObjectId,
    ref: 'Guest',
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
  birthDate: {
    type: Date,
    required: false
  },
  idAth: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  date: {
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