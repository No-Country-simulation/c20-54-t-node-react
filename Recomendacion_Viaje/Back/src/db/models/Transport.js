const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new Schema({
  name: String,
  rating: Number,
  images: [String],
  firstImage: String,
  description: Object,
  service: [String],
  status: {
    type: String,
    default: 'active'
  }
});

module.exports = mongoose.model('Transport', transportSchema);