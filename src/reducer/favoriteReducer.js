import {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    VIEW_FAVORITE,
} from '../types'

const initialState={
    favorites:[],
    selected:null,
    error:null,
}

const favoriteReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAVORITE:      return {...state,
                                favorites:[...state.favorites,action.payload]}
        case DELETE_FAVORITE:   return {...state,
                                favorites:state.favorites.filter(item=>item.id!==action.payload),
                                selected:state.selected.id===action.payload?null:state.selected}
        case VIEW_FAVORITE:     return {...state,
                                selected:state.favorites.filter(item=>item.id===action.payload)[0]}
        
        
                            default: return state;
    }
}
export default favoriteReducer;