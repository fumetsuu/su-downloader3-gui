import React from 'react'
import { render } from 'react-dom'
const io = require('socket.io-client')
window.socket = io.connect('http://localhost:1234')

import App from './App'
import AddDialog from './components/AddDialog'

require('./styles/main.sass')

render(
	<App/>,
	document.getElementById('app')
)

render(
	<AddDialog/>,
	document.getElementById('add-dialog')
)