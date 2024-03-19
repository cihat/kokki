const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
})

module.exports = mongoose.model('Food', foodSchema)
