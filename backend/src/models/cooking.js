const mongoose = require('mongoose')

//TODO: Create a schema for the Cooking model
const cookingSchema = new mongoose.Schema({
  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chef',
    autopopulate: { maxDepth: 1 }
  },
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    autopopulate: { maxDepth: 1 }
  },
})

cookingSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Cooking', cookingSchema)
