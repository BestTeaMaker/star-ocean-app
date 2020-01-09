import React, {Component} from 'react'
import Axios from 'axios'

export default class CharacterTalents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			talents:[],
			selectedCharacter:''
		}
	}
	
	loadData() {
		return Axios.get("https://api.myjson.com/bins/1ac5tl.json")
			.then(result =>{
				switch (this.state.selectedCharacter){
					case 'Roddick':
						this.setState({
							talents:result.data[0]
						});
						break;
					case 'Millie':
						this.setState({
							talents:result.data[1]
						});
						break;
					case 'Ronyx':
						this.setState({
							talents:result.data[2]
						});
						break;
					case 'Ilia':
						this.setState({
							talents:result.data[3]
						});
						break;
					case 'Cyuss':
						this.setState({
							talents:result.data[4]
						});
						break;
					case 'Phia':
						this.setState({
							talents:result.data[5]
						});
						break;
					case 'Ashlay':
						this.setState({
							talents:result.data[6]
						});
						break;
					case 'Ioshua':
						this.setState({
							talents:result.data[7]
						});
						break;
					case 'Erys':
						this.setState({
							talents:result.data[8]
						});
						break;
					case 'Mavelle':
						this.setState({
							talents:result.data[9]
						});
						break;
					case 'Pericci':
						this.setState({
							talents:result.data[10]
						});
						break;
					case 'T\'nique':
						this.setState({
							talents:result.data[11]
						});
						break;
					case 'Welch':
						this.setState({
							talents:result.data[12]
						});
						break;
					default:
						return null;
				}
				
			})
			.catch(error=>{
				console.error('error',error);
			});
	}
	
	static getDerivedStateFromProps(props, prevState){
		if(props.character!==prevState.selectedCharacters){
			return {
				selectedCharacter:props.character
			}
		}
	}
	
	componentDidUpdate(props, prevState) {
		if(props.character!==this.props.character){
			this.setState({
				selectedCharacter:this.props.character
			});
			console.log(this.state.selectedCharacter)
			this.loadData();
		}
	}
	
	render () {
		let whichClass = this.props.characterMenu!=='talents' ?
			'hideElement' : this.props.characterSelected ?
				'blueBackground' : 'hideElement';
				
		let character = this.props.character
		return(
			<div className={whichClass}>
				<h1>{character} Talents</h1>
				{this.state.talents['Originality start']}
			</div>
		)
	}
}