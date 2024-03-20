const mongoose = require('mongoose')
const { ingredientTypes } = require('../types/index')

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ingredientTypes,
    default: 'other'
  }
})

module.exports = mongoose.model('Ingredient', ingredientSchema)
