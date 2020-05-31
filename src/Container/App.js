import React , {Component} from 'react';
import {connect} from 'react-redux';
import {searchfieldInput} from '../actions';
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'
import 'tachyons';

const mapStateToProps=(state)=>{
return{
	searchField: state.searchField,
}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		onSearchChange: (event)=>dispatch(searchfieldInput(event.target.value))
	}
}

class App extends Component{
	constructor(){
		super()
		this.state= {
			robots: [],
		}
	}
 componentDidMount(){
 	fetch('https://jsonplaceholder.typicode.com/users')
 	.then(response=> response.json())
 	.then(users=> this.setState({robots: users}))
 }

 

	render(){
		const filterRobots = this.state.robots.filter(robot=>{
 		return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
 	})
		if(this.state.robots.length===0){
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



