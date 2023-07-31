import { useContext } from "react"
import { MovieContext } from "../MovieContext"

function ThemeBtn () {

    const {theme, toggleTheme} = useContext(MovieContext)

    return(
        <>
            <button 
            className={`theme-button-${theme}`}
            onClick={toggleTheme}
            >
                Change Theme
            </button>
                
            </>
    )
}

export default ThemeBtn