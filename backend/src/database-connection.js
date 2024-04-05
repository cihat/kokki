const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost';

mongoose.set('debug', false);

mongoose
  .connect(connectionString)
  .then(() => console.log('Database connection established.'))
  .catch(err => console.error('Database connection error:', err));

const sessionMiddleware = session({
  secret: 'thisissupermuperasecretkey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: connectionString,
    stringify: false
  }),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    secure: process.env.NODE_ENV === 'production',
  }
});

module.exports = { sessionMiddleware };
