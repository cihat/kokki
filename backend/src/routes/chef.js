const express = require('express')
const chefService = require('../services/chef-service')

const router = express.Router()

router.put('/ingredients', async (req, res) => {
  const { ingredients, chefName } = req.body

  try {
    const ing = await chefService.updateChefIngredients(chefName, ingredients)
    res.send({
      message: 'Ingredients updated',
      data: ing

    })
  } catch (err) {
    res.send({
      message: err.message,
      status: 500
    })
  }
})

module.exports = router
