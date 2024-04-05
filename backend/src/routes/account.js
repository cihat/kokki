const express = require('express')
const chefService = require('../services/chef-service')

const router = express.Router()

router.get('/', async (req, res) => {
  const { chefId } = req.body

  try {
    const chef = await chefService.find(chefId)

    if (!chef) {
      res.send({
        message: 'Chef not found',
        status: 500
      })
    }

    res.send({
      message: 'Chef found',
      data: chef
    })
  } catch (error) {
    res.send({
      message: error.message,
      status: 500
    })
  }
})

router.post('/create', async (req, res) => {
  const { name } = req.body

  try {
    const chef = await chefService.insert({ name })

    if (!chef) {
      res.send({
        message: 'Chef not created',
        status: 500
      })

    }

    res.send({
      message: 'Chef created',
      data: chef
    })
  } catch (err) {
    res.send({
      message: err.message,
      status: 500
    })
  }
})

router.put('/ingredients', async (req, res) => {
  const { ingredients, chefId } = req.body

  try {
    const chef = await chefService.find(chefId)

    if (!chef) {
      res.send({
        message: 'Chef not found',
        status: 500
      })
    }

    await chefService.updateChefIngredients(chefId, ingredients)

    res.send({
      message: 'Ingredients updated',
    })
  } catch (err) {
    res.send({
      message: err.message,
      status: 500
    })
  }
})

module.exports = router
