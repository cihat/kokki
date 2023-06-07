/* eslint-disable no-console */
import mongoose from "mongoose"

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost'

mongoose.set('debug', true)

mongoose
  .connect(connectionString)
  .then(() => console.log('Database connection established.'))
  .catch(console.log)

module.exports = mongoose.connection
