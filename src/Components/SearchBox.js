import React from 'react';

const SearchBox = ({SearchChange})=>{
	return <input className='bg-lightest-blue pa3 ma3 ba b--light-blue' type= 'search' placeholder= 'Search Robot' onChange={SearchChange} />
}

export default SearchBox;