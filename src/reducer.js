import {SEARCHFIELD_INPUT} from './constants';


export const setSearchfield=(state={searchField:''},action={})=>{
	switch(action.type){
		case SEARCHFIELD_INPUT:
		return Object.assign({},state,{searchField:action.payload})
		default:
		return state
	}
}