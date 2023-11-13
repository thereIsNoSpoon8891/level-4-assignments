import { MovieContext } from "../MovieContext";
import { useContext } from "react";
import Movies from "./Movies";
import Header from "./Header";
import Footer from "./Footer";


function NowPlaying () {

    const {nowPlaying, theme} = useContext(MovieContext);

    const movieElements = nowPlaying.map(movie => (
        <Movies 
        key={movie.id}
        title={movie.original_title}
        image={movie.poster_path}
        id={movie.id}
        />
    ))

    return(
        <>
        <Header />
        <h1 className={`now-playing-header-${theme}`}>
            Now in Theaters!
        </h1>
        <div className={`now-playing-container-${theme}`}>
            {movieElements}
        </div>
        <Footer />
        </>
    )
}

export default NowPlaying