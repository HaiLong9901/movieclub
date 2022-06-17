import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './MovieListing.scss'
import { getAllMovies } from '../../features/movies/moviesSlice'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import { setting } from '../../common/setting'

function MovieListing() {

  const movies = useSelector(getAllMovies)
  console.log(movies)

  let renderMovies = movies.map(movie => (
    <MovieCard key={movie.id} movie={movie}/>
  ))


  return (
    <div className="movieListing">
      <Slider {...setting}>
        {renderMovies}
      </Slider>
      
    </div>
  )
}

export default MovieListing