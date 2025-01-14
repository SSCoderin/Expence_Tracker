const mongoose = require("mongoose");
require('dotenv').config()
const connectdb = async () => {
  try {

    console.log("Connecting to database...", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database not connected");
    console.log(error);
  }
};

module.exports = connectdb;