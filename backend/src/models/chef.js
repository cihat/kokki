const mongoose = require('mongoose')
const { dietType } = require('../types/index')


const chefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dietType: {
    type: String,
    enum: dietType,
    default: 'omnivore'
  },
  ingredients: {
    type: Array,
    default: []
  },
  favoriteFood: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
  }
})

module.exports = mongoose.model('Chef', chefSchema)
