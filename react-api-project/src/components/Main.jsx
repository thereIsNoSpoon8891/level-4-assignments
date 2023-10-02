import { useContext } from "react"
import { MovieContext } from "../MovieContext"
import Header from "./Header"
import Footer from "./Footer"


function Main () {

    const {theme} = useContext(MovieContext)


    return(
        <>
            <Header />
            <div className="main-image-backdrop">

                <div className={`main-container-${theme}`}>


                        <span className={`main-title-${theme}`}>
                            Welcome to the mini Movie Data-Base!
                        </span>


                    <h3 className={`main-subtitle-${theme}`}>
                        This site is is desginged to display basic movie information in three categories. 
                    </h3>
                        <div className={`description-${theme}`}>
                                <p>
                                   <b>Now Playing</b>  - See movies that are in theaters now.
                                </p>
                                <p>
                                   <b>Top Rated</b>  - Gives a list of the highest rated movies of all time.
                                </p>
                                <p>
                                    <b>Coming Soon</b> - Displays movies not yet in in theaters.
                                </p>
                                <p>
                                    Use the navigation bar at the top to quickly move around the site, click a movie
                                    to see details! Have fun browsing!
                                </p>
                        </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Main