const path = require('path')
const { SuDScheduler } = require('su-downloader3')
const observer = require('./observer')

const suDScheduler = new SuDScheduler({ downloadOptions: { throttleRate: 100 } })

module.exports = (app, io, appBuildDir) => {
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(appBuildDir, 'index.html'))
	})
	
	var scopedSocket

	io.on('connection', socket => {
		scopedSocket = socket		
	})

	app.post('/newDownload', (req, res) => {
		var { url, destination } = req.body
		scopedSocket.emit('newDownload', destination)
		suDScheduler.queueDownload(destination, { url, savePath: destination }, observer(destination, scopedSocket))
		res.end()
	})

	app.post('/startDownload', (req, res) => {
		var { key } = req.body
		suDScheduler.startDownload(key)
		res.end()
	})

}