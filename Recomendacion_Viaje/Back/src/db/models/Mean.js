const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meanSchema = new Schema({
  transportID: {
    type: Schema.Types.ObjectId,
    ref: 'Transport',
    required: true
  },
  type: {
    type: String,
    required: true
  },
  numberMean: {
    type: Number,
    required: true
  },
  seatsTotal: {
    type: Number,
    required: true
  },
  seatsOccupied: {
    type: Number,
    required: true
  },
  seatsFree: {
    type: Number,
    required: true
  },
  prices: {
    type: [Number],
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  description: {
    type: Object,
    default: {
      content: String
    }
  },
  images: {
    type: [String],
    default: []
  },
  firstImage: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  }
});

module.exports = mongoose.model('Mean', meanSchema);