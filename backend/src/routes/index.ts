import express, { Router } from 'express'
import Ingredient from "../models/ingredient"
import { createIngredient } from '../lib/mock-ingredient'

const router: Router = express.Router()

function handleMockIngredient() {
  const mockIngredients: any = createIngredient()

  mockIngredients.forEach(async (ingredient: any) => {
    try {
      const newIngredient: any = new Ingredient(ingredient);

      await newIngredient.save();
      console.log(`Created a new mock ingredient (${ingredient.name}):`, newIngredient);
    } catch (err) {
      console.error(`Error: when creating new ingredient, (${ingredient.name}):`, err);
    }
  });
}


// enter ingredients
router.post('/create-ingredient', async (req, res, next) => {
  try {
    const count = await Ingredient.countDocuments({});

    if (count > 150) return res.sendStatus(200)

    handleMockIngredient()

  } catch (error) {
    console.error('Error: ', error);
  }

  res.sendStatus(200)
})

router.get('/ping', (req, res) => {
  res.sendStatus(200)
})

export default router
