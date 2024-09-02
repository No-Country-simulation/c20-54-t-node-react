const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostingSchema = new Schema({
  name: String,
  description: String,
  rating: Number,
  location: String,
  image: String,
});

module.exports = mongoose.model('Hosting', hostingSchema);