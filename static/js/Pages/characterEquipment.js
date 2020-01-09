import React, {Component} from 'react'

export default class CharacterEquipment extends Component {
	constructor(props) {
		super(props);
	}
	
	render () {
		let whichClass = this.props.characterMenu!=='equipment' ?
			'hideElement' : this.props.characterSelected ?
				'blueBackground' : 'hideElement';
				
		let character = this.props.character
		return(
			<div className={whichClass}>
				<h1>{character} Equipment</h1>
			</div>
		)
	}
}