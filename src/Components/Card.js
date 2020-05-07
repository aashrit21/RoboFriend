import React from 'react';

const Card =({id, name,email})=>{
	return (
		<div className= 'dib bg-light-green pa3 ma2 br3 bw3 grow shadow-5 tc'>
			<img src={`https://robohash.org/${id}?200x200`} alt='Robot Pic' />
			<div >
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
  );
}

export default Card;