const express = require('express')
const chefService = require('../services/chef-service')
const User = require('../models/user')
const passport = require('passport')

const router = express.Router()

router.post('/register', async (req, res, next) => {
  try {
    const createdUser = new User(req.body.user)
    const user = await User.register(createdUser, req.body.user.password)

    console.log('cihat test', user)

    req.session.userId = user._id
    req.session.save()

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/session',
  passport.authenticate('local', { failWithError: true }),
  async (req, res) => {
    res.send(req.user)
  },
  (err, req, res, next) => {
    if (err.status !== 401) return next(err)

    next(
      new Error(
        'The username and password you provided did not match our records. Please double-check and try again.'
      )
    )
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
