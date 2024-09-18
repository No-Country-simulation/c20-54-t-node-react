const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model
const guestSchema = require('./Guest');

console.log('guestSchema ------> ', guestSchema.obj);

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
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);