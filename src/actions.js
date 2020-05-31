import {SEARCHFIELD_INPUT} from './constants';

export const searchfieldInput= (text)=>{
	return{
		type: SEARCHFIELD_INPUT,
		payload: text
	}
}

