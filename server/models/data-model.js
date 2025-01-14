const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }
});


const Data = mongoose.model("Data", dataSchema);
module.exports = Data;

