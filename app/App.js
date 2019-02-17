import React from 'react'

import { Sidebar, Actionbar, Downloads } from './components'

const App = () => {
	return (
		<div className="app-container">
			<Sidebar />
			<Actionbar />
			<Downloads />
		</div>
	)
}

export default App
