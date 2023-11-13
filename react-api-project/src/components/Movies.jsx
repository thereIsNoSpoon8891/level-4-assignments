import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../MovieContext";


function Movies (props) {
 
    const {title, image, release, rating, votes, id } = props;
    
    const {theme} = useContext(MovieContext);

    return(
        <div className="movie">
            <Link 
            to={`/movie-details/${id}`} 
            className={`movie-link-${theme}`} 
            >

            <h5 className={`movie-title-${theme}`}>
                {title}
            </h5>
            <img 
            className={`movie-image-${theme}`} 
            src={`https://image.tmdb.org/t/p/w300${image}`}
            />

            <h5 className={`movie-sub-${theme}`} >
                {release}
                {rating ? `${rating}/10` : ""}
                <br/>
                {votes ? `${votes} total votes`: ""} 
            </h5>
            </Link>
        </div>
    )
}

export default Movies