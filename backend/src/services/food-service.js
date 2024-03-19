const BaseService = require('./base-service')
const Food = require('../models/food')

class FoodService extends BaseService {
  getIngredients(foodName) {
    this.model.findBy(name, foodName).ingredients
  }
}

module.exports = new FoodService(Food)
