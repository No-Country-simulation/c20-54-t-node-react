const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Guest', guestSchema);