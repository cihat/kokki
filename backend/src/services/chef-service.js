const BaseService = require('./base-service')
const Chef = require('../models/chef')

class ChefService extends BaseService {
  async findByChefName(name) {
    return this.findBy('name', name)
  }

  async findByIngredients(ingredients) {
    return this.query({ ingredients: { $in: ingredients } })
  }

  async updateChefIngredients(name, ingredients) {
    return this.update(name, { ingredients })
  }
}

module.exports = new ChefService(Chef)
