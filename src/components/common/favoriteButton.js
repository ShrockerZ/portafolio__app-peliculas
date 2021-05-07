import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import UseFavorite from '../../hooks/useFavorite';
import {    addFavorite as addFavorite_Action,
            deleteFavorite as deleteFavorite_Action } from '../../actions/favoriteAction';


const FavoriteButton = ({item}) => {
    const {isInFavoriteList}=UseFavorite();
    const dispatch = useDispatch()
    const addFavorite=item=> dispatch(addFavorite_Action(item));
    const deleteFavorite=id=> dispatch(deleteFavorite_Action(id));

    return ( 
        <Fragment>
        {!isInFavoriteList(item.id)?
            <button className="button-icon top"
                onClick={ ()=>{addFavorite(item)}}>
                <i className="far fa-heart text-danger"></i>
            </button>
            :
            <button className="button-icon top"
                    onClick={ ()=>{deleteFavorite(item.id)}}>
                    <i className="fas fa-heart text-danger"></i>
            </button>
            }
        </Fragment>
     );
}
 
export default FavoriteButton;