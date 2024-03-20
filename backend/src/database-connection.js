/* eslint-disable no-console */
const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost'

mongoose.set('debug', false)

mongoose
  .connect(connectionString)
  .then(() => console.log('Database connection established.'))
  .catch(console.log)

module.exports = mongoose.connection
