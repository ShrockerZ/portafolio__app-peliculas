import { useSelector } from 'react-redux';

const  UseFavorite= () => {
    const {favorites} = useSelector(state => state.favorites);
    const isInFavoriteList=id=>{
        let exist=false;
        favorites.forEach(favorite=>{
            if(favorite.id===id){
                exist=true;
                return
            }
        });
        return exist;
    }
    return {isInFavoriteList};
}
 
export default UseFavorite;