import React from 'react';

const Searchmovie = (props) => {
	return (
		<div className='Search'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search.movies ..'
			></input>
		</div>
	);
};


export default Searchmovie;