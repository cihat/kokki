import createError from 'http-errors'
import express, { Express, Request, Response, NextFunction } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index'
import usersRouter from './routes/users'

import ErrorResponse, { ErrorType } from './interfaces/ErrorResponse'

import './database-connection'

export const app: Express = express()

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

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404))
})

// error handler
app.use((err: any, req: Request, res: Response<ErrorResponse>, next: NextFunction) => {
  const error: ErrorType = {
    status: err.status || 500,
    message: err.message,
  }

  if (req.app.get('env') === 'development') {
    error.stack = err.stack
  }

  res.status(error.status)
  res.send(error)
})

export default app
