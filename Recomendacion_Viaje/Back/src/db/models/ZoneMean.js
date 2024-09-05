const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zoneMeanSchema = new Schema({
  meanID: {
    type: Schema.Types.ObjectId,
    ref: 'Zone'
  },
  type: {
    type: String,
    enum: ['economy', 'tourist', 'executive', 'vip'],
    default: 'economy'
  },
  seatsTotal: {
    type: Number,
    default: 0
  },
  seatsOccupied: {
    type: Number,
    default: 0
  },
  seatsFree: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: Object,
  },
  images: {
    type: [String],
    default: []
  },
  firstImage: {
    type: String,
    default: ''

  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  }
});