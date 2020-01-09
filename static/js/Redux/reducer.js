import { SELECTCHAR, UNSELECTCHAR } from './actions'
import { combineReducers } from 'redux'

const initialState = {
	character:''
}


export const selectCharacterReducer = (state=initialState, action) => {
	switch (action.type) {
		case SELECTCHAR:
			return Object.assign({},state,{
				character:action.character
			});
		case UNSELECTCHAR:
			return Object.assign({}.state,{
				character:''
			});
		default:
			return state;
	}
}
