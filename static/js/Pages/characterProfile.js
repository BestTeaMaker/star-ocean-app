import React, {Component} from 'react'
import Axios from 'axios'


export default class CharacterProfile extends Component {
    constructor(props) {
        super(props);
        this.state= {
            profile:[],
			selectedCharacter:''
        }
    }
	
	loadData() {
		return Axios.get("https://api.myjson.com/bins/yp4sh.json")
			.then(result =>{
				switch (this.state.selectedCharacter){
					case 'Roddick':
						this.setState({
							profile:result.data[0]
						});
						break;
					case 'Millie':
						this.setState({
							profile:result.data[1]
						});
						break;
					case 'Ronyx':
						this.setState({
							profile:result.data[2]
						});
						break;
					case 'Ilia':
						this.setState({
							profile:result.data[3]
						});
						break;
					case 'Cyuss':
						this.setState({
							profile:result.data[4]
						});
						break;
					case 'Phia':
						this.setState({
							profile:result.data[5]
						});
						break;
					case 'Ashlay':
						this.setState({
							profile:result.data[6]
						});
						break;
					case 'Ioshua':
						this.setState({
							profile:result.data[7]
						});
						break;
					case 'Erys':
						this.setState({
							profile:result.data[8]
						});
						break;
					case 'Mavelle':
						this.setState({
							profile:result.data[9]
						});
						break;
					case 'Pericci':
						this.setState({
							profile:result.data[10]
						});
						break;
					case 'T\'nique':
						this.setState({
							profile:result.data[11]
						});
						break;
					case 'Welch':
						this.setState({
							profile:result.data[12]
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
        let whichClass = this.props.characterMenu!=='profile' ?
            'hideElement' : this.props.characterSelected ?
                'blueBackground' : 'hideElement';

        let character = this.props.character;

        return(         
            <div className={whichClass}>
                <h1>{character} Profile</h1>
                {this.state.profile['Character']}
            </div>

        )
    }
}