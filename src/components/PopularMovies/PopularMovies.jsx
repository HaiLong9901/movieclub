import React from 'react'
import { getPopularMovies } from '../../features/movies/moviesSlice'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import { setting } from '../../common/setting'
import './PopularMovies.scss'

function PopularMovies() {
  const movies = useSelector(getPopularMovies)

  return (
    <div className="popularMovies">
        <Slider {...setting}>
            {movies?movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            )):''}
        </Slider>
    </div>
  )
}

export default PopularMovies