#!/usr/bin/env node

/* eslint-disable */

/**
 * Module dependencies.
 */

import { app } from './app'
import { debug as Debug } from 'debug'
import http from "http"
import 'dotenv/config'

const debug = Debug('backend:server')

/**
 * Get port from environment and store in Express.
 */

const PORT = normalizePort(process.env.PORT as string)
app.set('port', PORT)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}🚀`))
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`
  debug(`Listening on ${bind}`)
}