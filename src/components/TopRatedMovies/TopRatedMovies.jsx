import React from 'react'
import './TopRatedMovies.scss'
import MovieCard from '../MovieCard/MovieCard'
import { useGetTopRatedMoviesQuery } from '../../features/api/apiSlice'
import Loading from '../Loading/Loading'

function TopRatedMovies() {
  
  const {
    data: movies = {},
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTopRatedMoviesQuery()
  let content
  if(isLoading) {
    content = <Loading />
  } else if(isSuccess) {
    content = <>
        {movies.results?.map((movie, index) => {
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
        })}
    </>
  } else if(isError) {
    content = <p>{error.toString()}</p>
  }
  return (
    <div className="topRatedMovies">
        {content}
    </div>
  )
}

export default TopRatedMovies