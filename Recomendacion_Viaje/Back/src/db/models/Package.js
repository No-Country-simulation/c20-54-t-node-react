const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  roomID: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  meanID: {
    type: Schema.Types.ObjectId,
    ref: 'Mean',
    required: true
  },
  priceTotal: {
    type: Number,
    required: true
  },
  description: {
    type: Object,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  }
});

module.exports = mongoose.model('Package', packageSchema);