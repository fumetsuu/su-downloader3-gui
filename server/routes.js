const path = require('path')

module.exports = (app, appBuildDir) => {
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(appBuildDir, 'index.html'))
	})
}