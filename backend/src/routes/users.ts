import express from 'express'
import User from "../models/user"

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await User.find())
})

export default router
