import React, {Component} from 'react'

export default class CharacterNav extends Component {
    constructor(props) {
        super(props);

        this.setHighlighted = this.setHighlighted.bind(this);
    }
    
    setHighlighted(e) {
		this.props.selectedMenu(e.target.getAttribute('name'))
    }

    render () {
        let divClass = this.props.characterSelected ?
                "blueBackground" :"hideElement"; 
		let navArray = [
			'Profile',
			'Recruitment',
			'Arts',
			'Talents',
			'Affection',
			'Equipment'
		];
        return(
            <div>
				<p>{this.props.characterMenu} - state transfered from characterMenu</p>
                <ul className={divClass}>
                    {navArray.map(item => {
                      const navItem = item.toLowerCase();
                      return (
                          <li key={navItem} name={navItem} onClick={this.setHighlighted} className={navItem === this.props.characterMenu ? 'highlighted' : 'unhighlighted'}>
								{item}
                          </li>
                      )
                    })}
                </ul>
            </div>
        )
    }
}
