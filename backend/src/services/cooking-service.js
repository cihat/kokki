const BaseService = require('./base-service')

const Cooking = require('../models/cooking')
const Food = require('../models/food')

class CookingService extends BaseService {

}

module.exports = new CookingService(Cooking)
