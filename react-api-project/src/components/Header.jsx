import { Link } from "react-router-dom"


function Header () {
    return(
        <div className="header-container">
            <ul>
                <li>
                    <Link to="/" >
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/now-playing" >
                        Now Playing
                    </Link>
                    
                </li>

                <li>
                    <Link to="/top-rated" >
                        Top Rated
                    </Link>
                </li>

                <li>
                    <Link to="/upcoming" >
                        Coming Soon
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
}

export default Header