import React, { createContext,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recoveryFavorite as recoveryFavorite_action } from '../actions/favoriteAction'

export const LocalStorageContext= createContext();
export const LocalStorage = (props) => {
    const favorites = useSelector(state => state.favorites.favorites);
    const dispatch = useDispatch();
    const recoveryFavorite= favorites=>dispatch(recoveryFavorite_action(favorites));
    // localstorage recovery
    useEffect(()=>{
        if(favorites.length===0){
            if(!localStorage.getItem('favorites')){
                localStorage.setItem('favorites',JSON.stringify(favorites)); 
            }else{
                const items=JSON.parse(localStorage.getItem('favorites'));
                recoveryFavorite(items);
            }
        }
        localStorage.setItem('favorites',JSON.stringify(favorites));
        // eslint-disable-next-line 
    },[favorites])
    return ( 
        <LocalStorageContext.Provider
            value={{}}>
            {props.children}
        </LocalStorageContext.Provider>
     );
}
 