import mongoose from "mongoose"
import autopopulate from 'mongoose-autopopulate'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)

userSchema.plugin(autopopulate)

export default mongoose.model('User', userSchema)
