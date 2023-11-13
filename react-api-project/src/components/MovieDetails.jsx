import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../MovieContext";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function MovieDetails () {

    const [movie, setMovie] = useState([])

    const [genres, setGenres] = useState([])

    const {theme} = useContext(MovieContext)

    const params = useParams();
    // id of individual movie, key value pair, {id: 0000}
    // console.log(params.id)// pulls value

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=23ef9f8d195fc310dc1205cce1f6bfb8`)
            .then(result => {
                setMovie(result.data)
                return result
            })
            .then(data => setGenres(data.data.genres))
            .catch(error => console.log(error))

    }, [params.id])


const genreList = genres.map(obj => <h3 key={obj.id}>{obj.name}</h3>)
//  console.log(genres)

    return(
        <>
            <Header />
                <div className={`movie-details-container-${theme}`} >
                    <img className="hero" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}/>
                    
                    {
                    movie.original_title &&
                    <div className={`details-title-${theme}`}>
                        <h1 >
                            {movie.original_title}
                        </h1>

                        <h2 className={`details-tagline-${theme}`}>
                                {movie.tagline ? `"${movie.tagline}"` : ""}
                        </h2>
                    </div>
                    }

                    {
                    movie.overview &&
                    <p className={`details-overview-${theme}`}>
                        {movie.overview} 
                    </p>
                    }

                    {
                    genres && 
                    <div className={`genres-${theme}`}>
                       <h3><b><u>Genres:</u></b></h3> 
                        {genreList}
                    </div>
                    }

                    {
                    movie.release_date &&
                        <h3 className={`details-release-${theme}`}>
                        Release Date: {movie.release_date}
                    </h3>
                    }

                    

                    <ul className={`details-container-${theme}`}>
                       <b><u>Movie Facts: </u></b> 
                        {
                        movie.budget > 1 &&
                            <li>
                            Movie budget: ${movie.budget}
                        </li>
                        }

                        {
                        movie.vote_average &&
                            <li>
                            Rating: {movie.vote_average}/10
                        </li>
                        }

                        {
                        movie.revenue > 1 &&
                            <li>
                            Revenue: ${movie.revenue}
                        </li>
                        }

                    </ul>
                    
                </div>

            <Footer />
        </>
    )
}

export default MovieDetails