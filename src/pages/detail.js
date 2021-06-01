import React, { Fragment,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { viewMovie as viewMovie_Action } from '../actions/movieAction';
import FavoriteButton from '../components/common/favoriteButton';
import MovieList from '../components/lists/movieList';
import Spinner from '../components/loader/spinner';


const Detail = () => {
    // state + dispatch
    let {id}= useParams();
    const dispatch = useDispatch();
    const viewMovie=id=>dispatch(viewMovie_Action(id)); 
    const {selected,loading}=  useSelector(state=>state.movies);
    // effect
    useEffect(() => {
        window.scrollTo(0,0);
        if(!selected){
            viewMovie(id);
        } 
    // eslint-disable-next-line 
    }, [id])
    // local functions
    const loadingImage= selected=>{
        let url;
        selected.backdrop_path!==undefined
            ?url=selected.backdrop_path
            :url=selected.poster_path;
        return url
    }


    return ( 
        <Fragment>
        {
            selected && loading===false ?
                <div className="detail">
                    <img
                        alt="" 
                        src={`${process.env.REACT_APP_ORIGINAL_URL}${loadingImage(selected)}` }
                        className="detail-background"></img>
                    <FavoriteButton item={selected}/>
                    <h1>{selected.title}</h1>
                    
                    <p className="detail-text">
                        {selected.overview}
                    </p>
                    <ul className="detail-genres">
                        {selected.genres.map(genre=>
                            <li key={genre.id}>{genre.name}</li> )}
                    </ul>
                    <ul className="detail-footer">  
                        <li>Fecha de lanzamiento {selected.release_date}</li>
                        <li>Promedio {selected.vote_average}</li>
                    </ul>
                </div>
                :<Spinner />
        }
        <h2>PELICULAS SIMILARES</h2>
        <MovieList />
        </Fragment>
);
}
 
export default Detail;