const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feactureMeanSchema = new Schema({
  meanID: {
    type: Schema.Types.ObjectId,
    ref: 'Mean',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  imageFirts: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  }
});

module.exports = mongoose.model('FeactureMean', feactureMeanSchema);