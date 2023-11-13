import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieContextProvider } from './MovieContext';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import NowPlaying from './components/NowPlaying';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import './app.css';



function App() {


  return (
    
    <MovieContextProvider>
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/> 
                <Route path='/now-playing' element={<NowPlaying />} />
                <Route path='/top-rated' element={<TopRated />} />
                <Route path='/upcoming' element={<Upcoming />} />
                <Route path='/movie-details/:id' element={<MovieDetails />} />
            </Routes>
        </Router>
    </MovieContextProvider>
    
  )
}

export default App
