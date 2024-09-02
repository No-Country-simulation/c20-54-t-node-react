const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
  nip: {
    type: Number,
    require: true
  },
  bank: {
    type: String,
    default: "Mastercard"
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Payment', paymentSchema)