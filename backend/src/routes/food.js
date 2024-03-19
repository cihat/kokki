const express = require('express')
const CookingService = require('../services/cooking-service')

const router = express.Router()

router.post('/suggestion', (req, res) => {
  const { similarity } = req.body

  try {
    const suggestions = CookingService.foodSuggestion(similarity)
    if (suggestions.length === 0) {
      return res.send({
        message: 'No suggestions found',
      })
    }

    res.send(suggestions)
  } catch (err) {
    res.send({
      message: err.message,
      status: 500
    })
  }
})

module.exports = router
