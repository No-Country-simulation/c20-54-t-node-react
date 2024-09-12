const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    packageID: {
      type: Schema.Types.ObjectId,
      ref: 'Package'
    },
    quantity: {
      type: Number,
      default: 1
    }
  }],
  priceTotal: {
    type: Number,
    default: 0
  },
  packageTotal: {
    type: Number,
    default: 0
  },
  status: {
    type: String, enum: ['pending', 'reserved', 'cancelled'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Car', carSchema);