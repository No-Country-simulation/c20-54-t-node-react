const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  description: {
    type: Object,
    default: {
      content: '',
    }
  },
  images: {
    type: [String],
    required: true
  },
  imageFirst: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active'
  }
});

module.exports = mongoose.model('Hosting', hostingSchema);