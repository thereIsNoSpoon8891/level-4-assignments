import ThemeBtn from "./ThemeBtn"
import apiLogo from "../images/tmdb.png"

function Footer () {


    return(
        <div className="footer-container">
            <p>
            "This product uses the TMDB API but is not endorsed or certified by TMDB."
            </p>
            <ThemeBtn />
            <img className="logo" src={apiLogo}  />
        </div>
    )
}

export default Footer