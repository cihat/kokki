const BaseService = require('./base-service')
const Food = require('../models/food')

class FoodService extends BaseService {
  async suggestion(ingredients, similarity = 0.5) {
    try {
      const foods = await this.model.find({ ingredients: { $in: ingredients } });

      const suggestions = foods.filter(food => {
        const matchingIngredients = food.ingredients.filter(ingredient => ingredients.includes(ingredient));
        return matchingIngredients.length / food.ingredients.length >= similarity;
      });

      return suggestions;
    } catch (error) {
      console.error('Error in foodSuggestion', error);
      throw error;
    }
  }

  missingIngredients(food) {
    const foodIngredients = food.ingredients;
    const missingIngredients = foodIngredients.filter(ingredient => !this.chef.ingredients.includes(ingredient));

    return missingIngredients;
  }
  getIngredients(foodName) {
    this.model.findBy(name, foodName).ingredients
  }
}

module.exports = new FoodService(Food)
