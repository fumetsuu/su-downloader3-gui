import React from 'react'
import ActionBtn from './ActionBtn'

const Actionbar = () => {
	return (
		<div className="actionbar">
			<ActionBtn FAIcon="plus" Action={() => console.log('plus clicked')} />
		</div>
	)
}

export default Actionbar