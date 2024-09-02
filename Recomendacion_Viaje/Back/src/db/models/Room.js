const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomName: {
    type: String,
    required: true
  },
  hostingID: {
    type: Schema.Types.ObjectId,
    ref: 'Hosting',
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  roomPrice: {
    type: Number,
    required: true
  },
  beds: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active'
  }
});

module.exports = mongoose.model('Room', roomSchema);