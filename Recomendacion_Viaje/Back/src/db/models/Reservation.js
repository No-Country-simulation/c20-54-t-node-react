const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model
const Guest = require('./Guest');

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
  guestID: {
    type: Schema.Types.ObjectId,
    ref: 'Guest',
    required: false
  },
  dataGuest: {
    type: Guest,
    default: null
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);