const express = require('express')
const foodService = require('../services/food-service')

const router = express.Router()

router.post('/create', async (req, res) => {
  const { foods } = req.body
  // const { name, ingredients } = food

  try {
    foods.forEach(async food => {
      await foodService.insert(food)
      console.log('Food created', food);
    });

    res.send({
      message: 'Foods created',
      status: 200
    })
  } catch (err) {
    res.send({
      message: err.message,
      status: 500
    })
  }
})

router.post('/suggestion', async (req, res) => {
  let { chefId, similarity, ingredients } = req.body

  try {
    // const { ingredients } = await chefService.find(chefId)
    ingredients = ingredients.map(ing => {
      if (ing.includes(' ')) {
        return ing.split(' ')[1].toLowerCase()
      }

      // remove first letter from ingredient
      return ing.slice(1).toLowerCase()
    })
    console.log('ingredients', ingredients);

    const suggestions = await foodService.suggestion(ingredients, similarity)

    if (suggestions.length === 0) {
      return res.send({
        message: 'No suggestions found',
        status: 200
      })
    }

    res.send({
      message: 'Suggestions found',
      suggestions,
      status: 200
    })
  } catch (err) {
    res.send({
      message: err.message,
      status: 500
    })
  }
})

module.exports = router
