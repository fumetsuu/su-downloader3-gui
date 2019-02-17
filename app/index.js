import React from 'react'
import { render } from 'react-dom'
import App from './App'

require('./styles/main.sass')

render(
	<App/>,
	document.getElementById('app')
)