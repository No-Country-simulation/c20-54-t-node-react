const mongoose = require('mongoose');
const { dropSearchIndex } = require('./Hosting');
const Schema = mongoose.Schema;

const feactureHostingSchema = new Schema({
  hostingID: {
    type: Schema.Types.ObjectId,
    ref: 'Hosting'
  },
  service: {
    type: String,
    required: true
  },
  description: {
    type: Number,
    required: true
  },
  images: [String],
  imageFirst: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active'
  }
});

module.exports = mongoose.model('FeactureHosting', feactureHostingSchema);