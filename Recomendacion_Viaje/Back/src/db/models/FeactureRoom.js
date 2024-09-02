const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feactureRoomSchema = new Schema({
  roomID: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  images: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active'
  }
});

module.exports = mongoose.model('FeactureRoom', feactureRoomSchema);