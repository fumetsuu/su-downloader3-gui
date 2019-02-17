const path = require('path')
const { startDownload } = require('su-downloader3')

module.exports = (app, io, appBuildDir) => {
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(appBuildDir, 'index.html'))
	})
	
	var globalSocket

	io.on('connection', socket => {
		globalSocket = socket		
	})

	app.get('/10mbtest', (req, res) => {
		console.log('starting download for 10mb test')
		startDownload('http://ftp.iinet.net.au/pub/test/10meg.test').subscribe({
			next: x => globalSocket.emit('dlinfo', x),
			error: e => globalSocket.emit('dlerr', e),
			complete: () => {
				globalSocket.emit('dlcomplete', 'id')
				res.end()
			}
		})
	})

}