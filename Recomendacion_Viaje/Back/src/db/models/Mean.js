const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meanSchema = new Schema({
  transportID: {
    type: Schema.Types.ObjectId,
    ref: 'Transport',
    required: true
  },
  type: String,
  numberMean: String,
  seatsTotal: Number,
  seatsOccupied: Number,
  seatsFree: Number,
  prices: [Number],
  to: String,
  from: String,
  description: Object,
  images: [String],
  firstImage: String,
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  }
});

moduel.exports = mongoose.model('Mean', meanSchema);