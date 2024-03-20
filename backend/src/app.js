const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const foodRouter = require('./routes/food')
const chefRouter = require('./routes/chef')
require('./database-connection')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/food', foodRouter)
app.use('/chef', chefRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
/* eslint-disable-next-line */
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
