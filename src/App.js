import React from "react";
import {useState, useEffect } from "react";
import './App.css';
import Movies from "./movies";


//7155c90
const API_URL = 'http://www.omdbapi.com?apikey=cb101afa'

const movie1={
    
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
    }


const App = ()=>{
    const [movie, setMovies]= useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies= async (title)=>{
        const response =await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('spiderman');

    }, []);
    return(
        <div className="app">
        <h1>movie site</h1>

        <div className="search">
            <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png'
            alt='search'
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {

            movie?.length>0
            ?(
                <div className="container">
                    {movie.map((movie)=>(
                         <Movies movie={movie}/>

                    ))}
                   
                </div>
            ):(
                <div className="empty">
                    <h2>no movies found</h2>
                </div>
            )
            
        }

       
        </div>
    );
}

export default App