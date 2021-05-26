import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { viewFavorite as viewFavorite_Action} from "../../actions/favoriteAction";
import { viewMovie as viewMovie_Action}  from "../../actions/movieAction"
import FavoriteButton from '../common/favoriteButton';
import { Link } from 'react-router-dom'

const FavoriteList = () => {
    const {favorites} = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const viewFavorite=id=>dispatch(viewFavorite_Action(id)); 
    const viewMovie=id=>dispatch(viewMovie_Action(id))
    return ( 

        <div className="favorite-list">
            {favorites.length>0?
                favorites.map(favorite=>(
                    <div  className="item" key={favorite.id}>
                        <img className="item-img" 
                        onClick={()=>{viewFavorite(favorite.id)}}
                        src={`${process.env.REACT_APP_IMG_URL}${favorite.poster_path}`} alt=""/>
                        <div className="buttons">
                            <FavoriteButton item={favorite}/>
                            <button className="button-icon"
                                onClick={()=>{viewMovie(favorite.id)}}>
                                <Link to={`/detail/${favorite.id}`}>
                                    <i className="fas fa-question-circle text-light d-none"></i>
                                </Link>
                            </button>
                        </div>
                        <div className="item-content">
                            <h2>{favorite.title}</h2>
                            <p>{favorite.overview.substr(0,100)+'...'}</p>
                        </div>
                    </div>
                ))
            :<p>No existe favorito almacenados</p>}
        </div>
     );
}
 
export default FavoriteList;