import React, {Component} from 'react'
import Axios from 'axios'

export default class CharacterAffection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			affection:[],
			selectedCharacter:''
		}
	}
	
	loadData() {
		return Axios.get("https://api.myjson.com/bins/gu76t.json")
			.then(result =>{
				switch (this.state.selectedCharacter){
					case 'Roddick':
						this.setState({
							affection:result.data[0]
						});
						break;
					case 'Millie':
						this.setState({
							affection:result.data[1]
						});
						break;
					case 'Ronyx':
						this.setState({
							affection:result.data[2]
						});
						break;
					case 'Ilia':
						this.setState({
							affection:result.data[3]
						});
						break;
					case 'Cyuss':
						this.setState({
							affection:result.data[4]
						});
						break;
					case 'Phia':
						this.setState({
							affection:result.data[5]
						});
						break;
					case 'Ashlay':
						this.setState({
							affection:result.data[6]
						});
						break;
					case 'Ioshua':
						this.setState({
							affection:result.data[7]
						});
						break;
					case 'Erys':
						this.setState({
							affection:result.data[8]
						});
						break;
					case 'Mavelle':
						this.setState({
							affection:result.data[9]
						});
						break;
					case 'Pericci':
						this.setState({
							affection:result.data[10]
						});
						break;
					case 'T\'nique':
						this.setState({
							affection:result.data[11]
						});
						break;
					case 'Welch':
						this.setState({
							affection:result.data[12]
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
		let whichClass = this.props.characterMenu!=='affection' ?
			'hideElement' : this.props.characterSelected ?
				'blueBackground' : 'hideElement';
				
		let character = this.props.character
		return(
			<div className={whichClass}>
				<h1>{character} Affection</h1>
				{this.state.affection['Millie']}
			</div>
		)
	}
}