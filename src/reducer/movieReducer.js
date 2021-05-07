import {
    GET_MOVIES,
    VIEW_MOVIE,
    LOAD_MOVIE,
    SEARCH_MOVIES
} from '../types'

const initialState={
    movies:[],
    selected:null,
    error:null,
    loading:false,
}

const movieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SEARCH_MOVIES:
        case GET_MOVIES:return {...state,
                            movies:action.payload,
                            loading:false}
        case LOAD_MOVIE:return {...state,
                            loading:true}
        case VIEW_MOVIE:return {...state,
                            selected:action.payload,
                            loading:false}
        default: return state;
    }
    

}
export default movieReducer;