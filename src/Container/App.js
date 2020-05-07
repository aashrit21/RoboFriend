import React , {Component} from 'react';
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'
import 'tachyons';



class App extends Component{
	constructor(){
		super()
		this.state= {
			robots: [],
			searchField: ''
		}
	}
 componentDidMount(){
 	fetch('https://jsonplaceholder.typicode.com/users')
 	.then(response=> response.json())
 	.then(users=> this.setState({robots: users}))
 }

 onSearchChange =(event)=>{
 	this.setState({searchField: event.target.value})

 }

	render(){
		const filterRobots = this.state.robots.filter(robot=>{
 		return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
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
					<SearchBox SearchChange= {this.onSearchChange} />
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

export default App;