import express, { Router } from 'express'

const router: Router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Hello World 🌎' })
})

router.get('/ping', (req, res) => {
  res.sendStatus(200)
})

export default router
