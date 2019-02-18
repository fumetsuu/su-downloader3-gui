import React, { Component } from 'react'
import Label from './Label'

export default class Sidebar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			labels: [{ title: 'All Downloads', counter: 0 }]
		}

		this.initSocketIO()
	}

	render() {
		let { labels } = this.state
		return (
			<div className="sidebar">
				{labels.map(label => {
					return <Label key={label.title} title={label.title} counter={label.counter} />
				})}
			</div>
		)
	}

	initSocketIO() {
		window.socket.on('newDownload', () => {
			this.updateLabel('All Downloads', 1)
		})
	}

	updateLabel(title, delta) {
		var { labels } = this.state
		var newLabels = labels.map(label => {
			if(label.title == title) {
				return { title, counter: label.counter + delta }
			} else {
				return label
			}
		})
		this.setState({ labels: newLabels })
	}
}