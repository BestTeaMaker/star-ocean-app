export const SELECTCHAR = 'SELECTCHAR';
export const UNSELECTCHAR = 'UNSELECTCHAR';


export const selectCharacter = (character) => {
	return {
		type: SELECTCHAR,
		character: character
	}
}

export const unselectCharacter = (character) => {
	return {
		type: UNSELECTCHAR,
		character: character
	}
}