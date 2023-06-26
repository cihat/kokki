import { Schema, model } from "mongoose"
import autopopulate from 'mongoose-autopopulate'
import { IIngredient, IngredientEnum } from "../interfaces/Models"

const ingredientSchema = new Schema<IIngredient>({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  type: {
    type: String, 
    enum: Object.values(IngredientEnum),
    required: true
  },
})

ingredientSchema.plugin(autopopulate);

export default model('Ingredient', ingredientSchema)