import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './page/Movie/MovieDetail/MovieDetail';
import ShowDetail from './components/ShowDetail/ShowDetail';
import PageNotFound from './page/PageNotFond/PageNotFound';
import Footer from './components/Footer/Footer'
import MoviePage from './page/Movie/MoviePage/MoviePage';
import LoginPage from './page/SignInPage/LoginPage';
import ShowPage from './page/Show/ShowPage';
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/customizeColor';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MoviePage />} />
            <Route path='/shows' element={<ShowPage />} />
            <Route path='/movies/:imdbID' element={<MovieDetail />} />
            <Route path='/shows/:showId' element={<ShowDetail />} />
            <Route path='/user/login' element={<LoginPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
      </Router>
      </ThemeProvider>
  );
}

export default App;
