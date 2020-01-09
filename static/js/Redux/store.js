import {createStore} from 'redux'
import {selectCharacterReducer} from './reducer'


const store = createStore(
	selectCharacterReducer,
	
);

export default store