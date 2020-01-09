import React, {Component} from 'react'

import Character from './characterSelector'//child
import CharacterProfile from './characterProfile'//child
import CharacterNav from './characterNav'//child
import CharacterRecruitment from './characterRecruitment'//child
import CharacterArts from './characterArts'//child
import CharacterTalents from './characterTalents'//child
import CharacterAffection from './characterAffection'//child
import CharacterEquipment from './characterEquipment'//child

export default class CharacterList extends Component {
	constructor(props) {
		super(props);
		this.state ={
			characterSelected:false,
			characterHighlighted:false,
			selected:false,
			character:'',
			characterMenu:'profile'
		}
		this.selectCharacter = this.selectCharacter.bind(this);
		this.selectedCharacter = this.selectedCharacter.bind(this);
		this.deselectCharacter = this.deselectCharacter.bind(this);
		this.selectedMenu = this.selectedMenu.bind(this);
	}
	
	selectCharacter = () => {
		this.setState({
			characterSelected: true,
			characterHighlighted: true
		})
	}
	
	deselectCharacter = () => {
		this.setState({
			characterSelected: false,
			characterHighlighted:false,
			characterMenu:'profile'
		})
	}
	
	selectedCharacter = (characterName) => {
		this.setState({
			character: characterName
		})
	}
	
	selectedMenu = (menu) => {
		this.setState({
			characterMenu: menu
		})
	}
	
	render() {
		const names = [
			'Roddick',
			'Millie',
			'Ilia',
			'Ronyx',
			'Cyuss',
			'Ashlay',
			'Phia',
			'Ioshua',
			'Erys',
			'Mavelle',
			'T\'nique',
			'Pericci',
			'Welch'
		]
		const list = names.map(
			i => {return {name:i}}
		)
		let divClass = this.state.characterSelected ?
				"blueBackground" :"hideElement"; 
		return (
			<div>
				<button onClick={this.deselectCharacter} className={divClass}>back</button>
				<p>{this.state.characterMenu} - state from characterMenu</p>
				<CharacterNav 
					className={divClass}
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					selectedMenu={this.selectedMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				<CharacterProfile 
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				<CharacterRecruitment 
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				<CharacterArts 
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				<CharacterTalents
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				<CharacterAffection
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				<CharacterEquipment
					character={this.state.character}
					characterMenu={this.state.characterMenu}
					deselectCharacter={this.deselectCharacter}
					characterSelected={this.state.characterSelected}
				/>
				{list.map(item =>{
					return (
						<Character 
							key={item.name} 
							name={item.name}
							characterHighlighted={this.state.characterHighlighted}
							selectedCharacter={this.selectedCharacter}
							characterSelected={this.state.characterSelected} 
							selectCharacter={this.selectCharacter}
						/>
					);
				})}
			</div>
		)
	}
}