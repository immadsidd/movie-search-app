import React,{useState} from "react";
import MovieCard from "./movieCard";

export default function Search(){
    const [query, setQuery]= useState('');
    const [movies, setMovies]= useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=bd21692ee16dcd57b0c7ef12a9c48457&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovies(data.results)
        console.log(data.results)
    }
    return(
        <>
        <form className="form" onSubmit={searchMovies}>
        <input className="input" type="text" name="query"
            placeholder="Movie Name" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="button" type="submit">Search</button>
    </form>
     <div className="card-list">
     {movies.filter(movie => movie.poster_path).map(movie => (
        <MovieCard  movie={movie} key={movie.id}/>
         
         ))}
         </div>
        
        </>
    )
}