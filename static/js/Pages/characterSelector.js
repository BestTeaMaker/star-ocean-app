import React, {Component} from 'react'

export default class Character extends Component {
	constructor(props){
		super(props);

		this.state={
			isSelected:false
		}
		
		this.changeColor = this.changeColor.bind(this);
	}
	
	changeColor(){
		this.props.selectCharacter();
		this.props.selectedCharacter(this.props.name);
		this.setState({
			isSelected:!true
		});
	}
	
	
	render() {
		let divClass = this.state.isSelected ? 
			"redBackground" : !this.props.characterSelected ?
				"blueBackground" : this.props.characterHighlighted ?
					"hideElement" : "blueBackground";

		return (
			<div>
				<h1 onClick={this.changeColor} className={divClass}>{this.props.name}</h1>
			</div>
		)
	}
}
