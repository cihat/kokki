import { Schema, Types, model } from "mongoose"
import autopopulate from 'mongoose-autopopulate'
import { IUser, UserEnum } from "../interfaces/Models"

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  favoriteFoods: [{
    type: Schema.Types.ObjectId,
    ref: 'Food',
    autopopulate: true
  }],
  previousFoods: [{
    type: Schema.Types.ObjectId,
    ref: 'Food',
    autopopulate: true
  }],
  type: {
    type: String,
    enum: Object.values(UserEnum),
    required: true
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient',
    autopopulate: true
  }],
},
  { timestamps: true }
);


userSchema.plugin(autopopulate)

export default model('User', userSchema)
