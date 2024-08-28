const mongoose = require('mongoose');

// connect database
const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    return connect
  } catch (error) {
    console.log(error);
  }
}

module.exports = db;