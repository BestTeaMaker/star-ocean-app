import React, {Component} from 'react'
import Axios from 'axios'

export default class CharacterProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recruitment:[],
			selectedCharacter:''
		}
	}
	
	loadData() {
		return Axios.get("https://api.myjson.com/bins/su0mx.json")
			.then(result =>{
				switch (this.state.selectedCharacter){
					case 'Roddick':
						this.setState({
							recruitment:result.data[0]
						});
						break;
					case 'Millie':
						this.setState({
							recruitment:result.data[1]
						});
						break;
					case 'Ronyx':
						this.setState({
							recruitment:result.data[2]
						});
						break;
					case 'Ilia':
						this.setState({
							recruitment:result.data[3]
						});
						break;
					case 'Cyuss':
						this.setState({
							recruitment:result.data[4]
						});
						break;
					case 'Phia':
						this.setState({
							recruitment:result.data[5]
						});
						break;
					case 'Ashlay':
						this.setState({
							recruitment:result.data[6]
						});
						break;
					case 'Ioshua':
						this.setState({
							recruitment:result.data[7]
						});
						break;
					case 'Erys':
						this.setState({
							recruitment:result.data[8]
						});
						break;
					case 'Mavelle':
						this.setState({
							recruitment:result.data[9]
						});
						break;
					case 'Pericci':
						this.setState({
							recruitment:result.data[10]
						});
						break;
					case 'T\'nique':
						this.setState({
							recruitment:result.data[11]
						});
						break;
					case 'Welch':
						this.setState({
							recruitment:result.data[12]
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
		let whichClass = this.props.characterMenu!=='recruitment' ?
			'hideElement' : this.props.characterSelected ?
				'blueBackground' : 'hideElement';
				
		let character = this.props.character;
		return(			
			<div className={whichClass}>
				<h1>{character} Recruitment</h1>
				{this.state.recruitment['Recruitment']}
			</div>
		)
	}
}