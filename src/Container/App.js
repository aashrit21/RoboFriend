import React , {Component} from 'react';
import {connect} from 'react-redux';
import {searchfieldInput, fetchRobotsData} from '../actions';
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'
import 'tachyons';

const mapStateToProps=(state)=>{
	console.log(state)
return{
	searchField: state.setSearchfield.searchField,
	robots: state.fetchingRobotsDisplay.robots,
	isFetching:state.fetchingRobotsDisplay.isFetching
}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		onSearchChange: (event)=>dispatch(searchfieldInput(event.target.value)),
		onFetchingRobots: ()=> dispatch(fetchRobotsData())
	}
}

class App extends Component{
	
 componentDidMount(){
 	this.props.onFetchingRobots()
 }

 

	render(){
		const filterRobots = this.props.robots.filter(robot=>{
 		return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
 	})
		if(this.props.isFetching){
		  return (<h1 className='loading f1'>
					LOADING<span>.</span><span>.</span><span>.</span>
				  </h1>
				);
		} else{
			return(
				<div className='tc'>
					<h1 className = 'f1'>RoboFrirnd</h1>
					<SearchBox SearchChange= {this.props.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filterRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
	 );
		}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



