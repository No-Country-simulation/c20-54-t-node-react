const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new Schema({
  name: String,
  rating: Number,
  images: [String],
  firstImage: String,
  description: String,
  service: [String],
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Transport', transportSchema);