import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const MovieInfo = () => {
    const {selected} = useSelector(state => state.favorites);
    return ( 
        <Fragment>
        {
            selected?
            <div className="info">
            <h2 className="info-title">{selected.title}</h2>
            <img src={`${process.env.REACT_APP_IMG_URL}${selected.backdrop_path}`} 
                alt="" className="info-img"/>
            <p className="info-text">
                {selected.overview.substr(0,300)}
            </p>
            <ul className="info-footer">
                <li>Fecha de estreno: {selected.release_date}</li>
                <li>Promedio:{selected.vote_average}</li>
            </ul>
            </div>
            :<p>Selecciona una pelicula para ver... </p>
        }
        </Fragment>

     );
}
 
export default MovieInfo;