const path = require('path')
const request = require('request')
import React, { Component } from 'react'
import { endPoint } from '../../util'

export default class AddDialog extends Component {
	constructor(props) {
		super(props)

		this.state = {
			url: '',
			destination: ''
		}
	}

	render() {
		let { url, destination } = this.state
		return (
			<div className="add-dialog">
				<div className="dialog-title">Add New Download</div>
				<input type="text" onChange={this.onURLChange.bind(this)} placeholder="URL" value={url} />
				<input type="text" onChange={this.onDestChange.bind(this)} placeholder="Destination" className="destination" value={destination} />
				<div className="ctrl-buttons">
					<input type="submit" value="Add to Queue" onClick={this.addDownload.bind(this)} />					
					<input type="submit" value="Download Now" onClick={this.addDownload.bind(this)} disabled={true}/>
					<input type="submit" value="Cancel" onClick={this.close.bind(this)} className="close-btn" />
				</div>
			</div>
		)
	}
	
	
	onURLChange(e) {
		this.setState({ url: e.target.value })
	}

	onDestChange(e) {
		this.setState({ destination: e.target.value })
	}

	addDownload() {
		let { url, destination } = this.state
		var options = {
			uri: endPoint('newDownload'),
			body: { url, destination },
			json: true
		}
		request.post(options)
	}

	close() {
		document.getElementById('add-dialog').style.display = 'none'
		this.setState({ url: '', destination: '' })
	}
}
