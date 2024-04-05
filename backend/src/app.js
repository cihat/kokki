const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()

const { sessionMiddleware } = require('./database-connection')
const passport = require('passport')

//TODO: should be in a separate file
const User = require('./models/user')

const indexRouter = require('./routes')
const accountRouter = require('./routes/account')

const app = express()

app.set('trust proxy', 1)
app.use(sessionMiddleware)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/account', accountRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  console.log(err)

  res.status(err.status || 500)
  res.send(
    req.app.get('env') === 'development'
      ? { kokki: err.kokki, message: err.message }
      : { message: err.message }
  )
})

module.exports = app
