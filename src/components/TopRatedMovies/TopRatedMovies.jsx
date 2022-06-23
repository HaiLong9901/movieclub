import React from 'react'
import './TopRatedMovies.scss'
import { fetchAsyncTopRateMovies, getTopRateMovies } from '../../features/movies/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'

function TopRatedMovies() {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(fetchAsyncTopRateMovies())
//   }, [dispatch])

  const movies = useSelector(getTopRateMovies)
  return (
    <div className="topRatedMovies">
        {movies?movies.map((movie, index) => {
            if(index > 4) return '';
            return (
                <div className="topRatedMovies__movie" key={movie.id}>
                    <div className="topRatedMovies__movie__number">
                        <h1>{index + 1}</h1>
                    </div>
                    <div className="topRatedMovies__movie__card">
                        <MovieCard movie={movie} />
                    </div>
                </div>
            )
        }):null}
    </div>
  )
}

export default TopRatedMovies