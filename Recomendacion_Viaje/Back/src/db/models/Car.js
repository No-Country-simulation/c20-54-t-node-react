const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Package'
    },
    quantity: {
      type: Number,
      default: 1
    }
  }],
  total: {
    type: Number,
    default: 0
  },
  status: {
    type: String, enum: ['pending', 'paid', 'shipped', 'delivered'],
    default: 'pending'
  }
});