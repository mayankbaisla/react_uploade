import React from 'react';
const MoviesList  = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies && props.movies.map((movies, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movies.Poster} alt='movie'></img>
                 
                   <div onClick={() => props.handleFavouritesClick(movies.Poster)}
                    className='overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />  
					</div>
				</div>
			))}
		</>
	);
};


export default MoviesList;