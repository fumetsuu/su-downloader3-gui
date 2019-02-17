const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const buildPath = path.resolve(__dirname, '../build')

//set up middleware
app.use('/build/public', express.static(path.resolve(buildPath, 'public')))

//set up routes
require('./routes')(app, io, buildPath)

//begin listening for requests
const port = 1234
server.listen(port, () => console.log('listening on port ', port))