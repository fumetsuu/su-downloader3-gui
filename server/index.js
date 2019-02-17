const path = require('path')
const express = require('express')
const app = express()

const buildPath = path.resolve(__dirname, '../build')

//set up middleware
app.use('/build/public', express.static(path.resolve(buildPath, 'public')))

//set up routes
require('./routes')(app, buildPath)

//begin listening for requests
const port = process.env.PORT || 1234
app.listen(port, console.log)