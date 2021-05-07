import React from 'react';
import MovieInfo from '../components/detail/movieInfo';
import FavoriteList from '../components/lists/favoriteList';

const Favorite = () => {
    
    return ( 
        <div className="favorite">
            <FavoriteList />
            <MovieInfo />
        </div> 
        );
}
 
export default Favorite;