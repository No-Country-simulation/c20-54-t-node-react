const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new Schema({
  name: String,
  rating: Number,
  images: [String],
  image: String,
  description: String,
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Transport', transportSchema);