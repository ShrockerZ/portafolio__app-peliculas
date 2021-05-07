import { toast } from 'react-toastify'
import {ADD_FAVORITE,
        DELETE_FAVORITE,
        VIEW_FAVORITE} from '../types'


export const addFavorite=item=>{
    return(dispatch)=>{
        dispatch({
            type:ADD_FAVORITE,
            payload:item
        });
        toast.success("Agregado a Favoritos");
    }
}
export const deleteFavorite=id=>{
    return(dispatch)=>{
        dispatch({
            type:DELETE_FAVORITE,
            payload:id
        })
        toast.error("se ha retirado de favoritos");
    }
}

export const viewFavorite=id=>{
    return(dispatch)=>{
        dispatch({
            type:VIEW_FAVORITE,
            payload:id
        })
    }
}

