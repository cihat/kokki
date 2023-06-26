import express from 'express'
import User from "../models/user"
import { createUser } from "../lib/mock-user"
import { getRandomNumber } from '../lib/utils'

const router = express.Router()

function handleMockUser() {
  const userCount = 10
  const mockUsers = createUser(userCount)

  mockUsers.forEach(async (u: any) => {
    try {
      const newUser: any = new User(u);

      await newUser.save();
      console.log(`Created a new mock user (${u.name}):`, newUser);
    } catch (err) {
      console.error(`Error: when creating new user, (${u.name}):`, err);
    }
  });

}

router.post('/create-user', async (req, res) => {
  try {
    const mockUserCount = await User.countDocuments({});

    if (mockUserCount > 60) return res.sendStatus(200)

    handleMockUser()

  } catch (error) {
    console.error("Error: ", error)
  }

  res.sendStatus(200)
})

export default router
