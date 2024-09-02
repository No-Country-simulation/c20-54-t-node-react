const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carPackageSchema = new Schema({
  packageID: {
    type: Schema.Types.ObjectId,
    ref: 'Package',
    required: true
  },
  carID: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  }
});