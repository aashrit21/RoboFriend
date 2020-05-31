import {SEARCHFIELD_INPUT, FETCHING_ROBOTS_START,FETCHING_ROBOTS_SUCCESS,FETCHING_ROBOTS_REJECT} from './constants';

export const searchfieldInput= (text)=>{
	return{
		type: SEARCHFIELD_INPUT,
		payload: text
	}
}


export const fetchRobotsData=()=>(dispatch)=>{
	console.log("fetching robots")
	dispatch({type:FETCHING_ROBOTS_START})
	return(
		fetch('https://jsonplaceholder.typicode.com/users')
	 	.then(response=> response.json())
	 	.then(users=> dispatch({type: FETCHING_ROBOTS_SUCCESS, payload: users}))
	 	.catch(err=> dispatch({type:FETCHING_ROBOTS_REJECT}))
		)
}