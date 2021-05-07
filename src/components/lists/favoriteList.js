import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {viewFavorite as viewFavorite_Action} from "../../actions/favoriteAction";
import FavoriteButton from '../common/favoriteButton';

const FavoriteList = () => {
    const {favorites} = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const viewFavorite=id=>dispatch(viewFavorite_Action(id)); 

    console.log(favorites);
    return ( 

        <div className="favorite-list">
            {favorites.length>0?
                favorites.map(favorite=>(
                    <div  className="item" key={favorite.id}>
                    <FavoriteButton item={favorite}/>
                        <img className="item-img" 
                        onClick={()=>{viewFavorite(favorite.id)}}
                        src={`${process.env.REACT_APP_IMG_URL}${favorite.poster_path}`} alt=""/>
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