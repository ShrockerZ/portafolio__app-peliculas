import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { viewMovie as viewMovie_Action } from '../../actions/movieAction';
import FavoriteButton from '../common/favoriteButton';
import Spinner from '../loader/spinner';


const MovieList = () => {
    const {movies} = useSelector(state => state.movies);
    // dispatch de funciones
    const dispatch = useDispatch();
    const viewMovie=id=>dispatch(viewMovie_Action(id)); 

    
    return ( 
        <div className="movie-list">
            {movies?
                movies.map(item=>(
                    item.poster_path?
                    <div key={item.id}
                        className="item text-dark">
                    <h1>{item.title}</h1>
                    <img
                        loading="lazy" 
                        src={`${process.env.REACT_APP_IMG_URL}${item.poster_path}`} 
                        alt={`${item.title}`} />
                    <FavoriteButton item={item}/>
                    <button className="button-icon bottom"
                        onClick={()=>{viewMovie(item.id)}}>
                        <Link to={`/detail/${item.id}`}>
                            <i className="fas fa-question-circle text-light"></i>
                        </Link>
                    </button>
                    <small className="item-vote">{item.vote_average}</small>
                    </div>
                    :null
                ))
            :<Spinner />}
        </div>
        );
}
 
export default MovieList;