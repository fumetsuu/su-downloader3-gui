import React from 'react'
import ActionBtn from './ActionBtn'
import { showAddDialog } from '../../util'

const Actionbar = () => {
	return (
		<div className="actionbar">
			<ActionBtn icon="add" action={showAddDialog} />
			<ActionBtn icon="play_arrow" action={() => console.log('play clicked')} />
			<ActionBtn icon="pause" action={() => console.log('pause clicked')} />
			<ActionBtn icon="stop" action={() => console.log('stop clicked')} />
			<ActionBtn icon="delete_forever" action={() => console.log('trash clicked')} className="actionbtn-delete"/>
		</div>
	)
}

export default Actionbar