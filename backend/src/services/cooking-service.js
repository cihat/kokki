const BaseService = require('./base-service')

const Cooking = require('../models/cooking')
const Food = require('../models/food')

class CookingService extends BaseService {
  foodSuggestion(similarity = 0.5) {
    const suggestions = Food.find(food => {
      const foodIngredients = food.ingredients;
      const matchingIngredients = foodIngredients.filter(ingredient => this.chef.ingredients.includes(ingredient));

      return matchingIngredients.length / foodIngredients.length > similarity;
    });

    return suggestions;
  }

  missingIngredients(food) {
    const foodIngredients = food.ingredients;
    const missingIngredients = foodIngredients.filter(ingredient => !this.chef.ingredients.includes(ingredient));

    return missingIngredients;
  }
}

module.exports = new CookingService(Cooking)
