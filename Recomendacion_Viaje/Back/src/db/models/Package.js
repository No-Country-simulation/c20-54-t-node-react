const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  category: {
    type: String,
    enum: ['completed', 'hosting', 'transport'],
    required: true
  },
  city: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  roomID: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
  },
  meanID: {
    type: Schema.Types.ObjectId,
    ref: 'Mean',
  },
  rating: {
    type: Number,
    enum: [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    default: 0
  },
  priceTotal: {
    type: Number,
    required: true
  },
  description: {
    type: Object,
    default: {
      title: String,
      content: String
    }
  },
  image: {
    type: [String],
    required: true
  },
  firstImage: {
    type: String,
    required: true
  },
  comments: {
    type: Array,
    default: [
      {
        userID: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        content: String,
        rating: Number,
        date: Date
      }
    ]
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  }
});

module.exports = mongoose.model('Package', packageSchema);