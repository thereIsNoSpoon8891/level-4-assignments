import { MovieContext } from "../MovieContext";
import { useContext } from "react";
import Movies from "./Movies";
import Header from "./Header";
import Footer from "./Footer";


function Upcoming () {

    const {upcoming, theme} = useContext(MovieContext);

    const movieElements = upcoming.map(movie => (
        <Movies 
        key={movie.id}
        title={movie.original_title}
        image={movie.poster_path}
        release={movie.release_date}
        id={movie.id}
        />
    ))
    return(
        <>
            <Header />

            <h1 className={`now-playing-header-${theme}`}>
            Coming Soon!
            </h1>
            <div className={`now-playing-container-${theme}`}>
            {movieElements}
            </div>

            <Footer />
        </>
        
    )
}

export default Upcoming