import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import ShowDetail from './components/ShowDetail/ShowDetail';
import PageNotFound from './components/PageNotFond/PageNotFound'
import Footer from './components/Footer/Footer'
import MovieListing from './components/MovieListing/MovieListing';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MovieListing />} />
            <Route path='/movies/:imdbID' element={<MovieDetail />} />
            <Route path='/shows/:showId' element={<ShowDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
