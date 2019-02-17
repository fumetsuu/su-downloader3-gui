const path = require('path')
const { startDownload } = require('su-downloader3')

module.exports = (app, io, appBuildDir) => {
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(appBuildDir, 'index.html'))
	})
	
	var scopedSocket

	io.on('connection', socket => {
		scopedSocket = socket		
	})

	app.get('/10mbtest', (req, res) => {
		console.log('starting download for 10mb test')
		startDownload('http://ftp.iinet.net.au/pub/test/10meg.test').subscribe({
			next: x => scopedSocket.emit('dlinfo', x),
			error: e => scopedSocket.emit('dlerr', e),
			complete: () => {
				scopedSocket.emit('dlcomplete', 'id')
				res.end()
			}
		})
	})

}