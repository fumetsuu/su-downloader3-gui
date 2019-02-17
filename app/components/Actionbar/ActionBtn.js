import React from 'react'
import PropTypes from 'prop-types'

const ActionBtn = ({icon, action, className}) => {
	return (
		<div className={'actionbtn ' + className || ''} onClick={action}>
			<div className="material-icons">{icon}</div>
		</div>
	)
}

ActionBtn.propTypes = {
	icon: PropTypes.string,
	action: PropTypes.func,
	className: PropTypes.string
}

export default ActionBtn
