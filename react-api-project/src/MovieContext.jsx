import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

const ThemeContext = createContext();


function MovieContextProvider (props) {
    
const [nowPlaying, setNowPlaying] = useState([]);

const [topRated, setTopRated] = useState([]);

const [upcoming, setUpcoming] = useState([]);

const [theme, setTheme] = useState("original");

const API_KEY = import.meta.env.VITE_API_KEY;


function toggleTheme () {
    setTheme(prevTheme => prevTheme === "easy" ? "original" : "easy");
}

useEffect (() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?${API_KEY}`)
        .then( res => setNowPlaying(res.data.results))
        .catch(err => console.log(err))

    axios.get(`https://api.themoviedb.org/3/movie/top_rated?${API_KEY}`)
        .then(res => setTopRated(res.data.results))
        .catch(err => console.log(err))

    axios.get(`https://api.themoviedb.org/3/movie/upcoming?${API_KEY}`)
        .then(res => setUpcoming(res.data.results))
        .catch(err => console.log(err))
    }, [])

    return(
        <MovieContext.Provider 
        value={{
            nowPlaying,
            topRated,
            upcoming,
            theme,
            toggleTheme
        }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}

export { MovieContextProvider, MovieContext, ThemeContext }