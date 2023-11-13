import { MovieContext } from "../MovieContext";
import { useContext } from "react";
import Movies from "./Movies";
import Header from "./Header";
import Footer from "./Footer";



function TopRated () {

    const {topRated, theme} = useContext(MovieContext);

    const movieElements = topRated.map(movie => (
        <Movies 
        key={movie.id}
        title={movie.original_title}
        image={movie.poster_path}
        rating={movie.vote_average}
        votes={movie.vote_count}
        id={movie.id}
        />
    ))

    return(
        <>
            <Header />

            <h1 className={`now-playing-header-${theme}`}>
            Top Rated Movies
            </h1>
            <div className={`now-playing-container-${theme}`}>
            {movieElements}
            </div>

            <Footer />
        </>
        
    )
}

export default TopRated