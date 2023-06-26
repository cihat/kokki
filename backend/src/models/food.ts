import { Schema, model } from "mongoose"
import autopopulate from 'mongoose-autopopulate'
import { IFood, FoodEnum } from "../interfaces/Models"

const foodSchema = new Schema<IFood>({
  name: {
    type: String,
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  ratio: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient',
    autopopulate: true
  }],
  tags: [{
    type: String,
    enum: Object.values(FoodEnum),
    required: true
  }],
});

foodSchema.plugin(autopopulate)

export default model("Food", foodSchema)