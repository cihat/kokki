const express = require('express')
const foodService = require('../services/food-service')
const chefService = require('../services/chef-service')
const cookingService = require('../services/cooking-service')

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
  const { chefId, similarity } = req.body
  try {
    const { ingredients } = await chefService.find(chefId)
    const suggestions = await foodService.suggestion(ingredients, similarity)
    if (suggestions.length === 0) {
      return res.send({
        message: 'No suggestions found',
      })
    }

    res.send({
      message: 'Food suggestions',
      data: suggestions,
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
