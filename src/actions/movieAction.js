import {    GET_MOVIES, 
            LOAD_MOVIE, 
            VIEW_MOVIE,
            SEARCH_MOVIES} from '../types'
import axios from 'axios';

// obtener todas las peliculas
export const getAllMovies =()=>{
 return async (dispatch)=>{
    try {
        dispatch({
            type:LOAD_MOVIE
        });
        const result=await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_TOKEN}`);
        // obtener peliculas
        dispatch({
            type: GET_MOVIES,
            payload:result.data.results
        });
    } catch (error) {
        console.log(error.response);
        
    }
 }   
}
// ver detalle de una pelicula 
export const viewMovie=id=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:LOAD_MOVIE
            });
            const result=await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_TOKEN}`);
            dispatch({
                type:VIEW_MOVIE,
                payload:result.data
            })
            // obtener peliculas similares
            const similar=await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_TOKEN}`);
            dispatch({
                type:GET_MOVIES,
                payload:similar.data.results
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const searchMovies=query=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type:LOAD_MOVIE
            });
            query= query.toLowerCase().replace(' ','%20');
            const result=await axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US&query=${query}&page=1&include_adult=false`);

            dispatch({
                type: SEARCH_MOVIES,
                payload:result.data.results
            });
        } catch (error) {
            console.log(error)
        }
    }
}
