const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new Schema({
  name: String,
  rating: Number,
  images: [String],
  firstImage: String,
  description: { // es de tipo objeto para describir la campania de transporte
    type: Object,
    default: {
      content: String,
    }
  },
  service: [String], // es de tipo array que guarda string para ver los servicios que da la compania como internet, comida, etc...
  status: {
    type: String,
    default: 'active'
  }
});

module.exports = mongoose.model('Transport', transportSchema);