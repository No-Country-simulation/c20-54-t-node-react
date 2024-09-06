const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

// connect database
const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connect
  } catch (error) {
    console.log(error);
  }
}

module.exports = db;