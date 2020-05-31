import {SEARCHFIELD_INPUT, FETCHING_ROBOTS_START,FETCHING_ROBOTS_SUCCESS,FETCHING_ROBOTS_REJECT} from './constants';


export const setSearchfield=(state={searchField:''},action={})=>{
	switch(action.type){
		case SEARCHFIELD_INPUT:
		return Object.assign({},state,{searchField:action.payload})
		default:
		return state
	}
}

export const fetchingRobotsDisplay=(state={robots:[], isFetching:false}, action={})=>{
	switch(action.type){
		case FETCHING_ROBOTS_START:
		return Object.assign({},state,{isFetching:true})
		case FETCHING_ROBOTS_SUCCESS:
		return Object.assign({},state,{robots:action.payload, isFetching:false})
		case FETCHING_ROBOTS_REJECT:
		return Object.assign({},state,{isFetching:false})
		default:
		return state


	}
}