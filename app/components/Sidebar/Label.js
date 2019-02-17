import React from 'react'
import PropTypes from 'prop-types'

const Label = ({title, counter}) => {
	return (
		<div className="label-container">
			<div className="label-text">{title}</div>
			<div className="label-counter">{counter}</div>
		</div>
	)
}

Label.propTypes = {
	title:  PropTypes.string,
	counter: PropTypes.number
}

export default Label