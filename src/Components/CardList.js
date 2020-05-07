import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{

	const robotsCardComponent= robots.map((user,i)=>{
		  return <Card key ={user.name} id = {user.id} name={user.name} email={user.email} />
	})
	return (
		<div>
			{robotsCardComponent}
		</div>
	);
}

export default CardList;