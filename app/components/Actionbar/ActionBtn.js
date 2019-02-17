import React from 'react'
import PropTypes from 'prop-types'

const ActionBtn = ({FAIcon, Action}) => {
	return (
		<div className="action-btn" onClick={Action}>
			<div className="fa-solid">{FAIcon}</div>
		</div>
	)
}

ActionBtn.propTypes = {
	FAIcon: PropTypes.string,
	Action: PropTypes.func
}

export default ActionBtn
