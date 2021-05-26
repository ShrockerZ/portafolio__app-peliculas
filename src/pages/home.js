import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import {    getAllMovies as getAllMovies_Action,
            searchMovies as searchMovies_Action } from '../actions/movieAction';
import MovieList from '../components/lists/movieList';

const Home = () => {
    // effect
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const getAllMovies=()=>{dispatch(getAllMovies_Action())};   
    const searchMovies=query=>{dispatch(searchMovies_Action(query))};   

    useEffect(() => {
        getAllMovies();
        // eslint-disable-next-line
    }, [])


    const onSubmitForm= e=>{
        e.preventDefault();
        searchMovies(search)
    }
    return ( 
        <main> 
            <div className="search-bar">
                <form onSubmit={e=>{onSubmitForm(e)}}>
                    <input  
                        type="text"
                        placeholder="busca tus peliculas favoritas "
                        name="search"
                        value={search}
                        onChange={e=>{setSearch(e.target.value)}}/> 
                    <input
                        className="bg-primary text-white" 
                        type="submit" value="BUSCAR"/>  
                </form> 
            </div>
            <MovieList />
            
        </main>);
}
 
export default Home;