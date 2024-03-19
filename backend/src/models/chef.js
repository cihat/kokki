const mongoose = require('mongoose')

const chefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  favoriteFood: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: false
  }
})

module.exports = mongoose.model('Chef', chefSchema)
