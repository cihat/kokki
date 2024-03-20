const BaseService = require('./base-service')
const Chef = require('../models/chef')

class ChefService extends BaseService {
  async updateChefIngredients(chefId, ingredients) {
    return this.update(chefId, { ingredients })
  }
}

module.exports = new ChefService(Chef)
