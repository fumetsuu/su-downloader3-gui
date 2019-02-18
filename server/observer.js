const bytes = require('bytes')

const observer = (key, socket) => {
	return {
		next: downloadProgressInfo => {
			if(downloadProgressInfo.time) {
				socket.emit(key, processDownloadProgressInfo(downloadProgressInfo))
			}
		},
		error: error => socket.emit('error', { key, error }),
		complete: () => socket.emit('complete', key)
	}
}

function processDownloadProgressInfo(downloadProgressInfo) {
	var downloaded = bytes(downloadProgressInfo.total.downloaded)
	var filesize = bytes(downloadProgressInfo.total.filesize)
	var percentage = downloadProgressInfo.total.percentage.toFixed(2)
	var elapsed = Math.round(downloadProgressInfo.time.elapsed / 1000)
	var eta = Math.round(downloadProgressInfo.time.eta)
	var speed = bytes(downloadProgressInfo.speed)
	return { downloaded, filesize, percentage, elapsed, eta, speed }
}

module.exports = observer