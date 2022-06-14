import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './MovieListing.scss'
import movieApi from '../../common/apis/movieApi'
import { api_key } from '../../common/apis/MovieApiKey'
import { getAllMovies } from '../../features/movies/moviesSlice'
import MovieCard from '../MovieCard/MovieCard'

function MovieListing() {

  const movies = useSelector(getAllMovies)
  console.log(movies)

  let renderMovies = movies.map(movie => (
    <MovieCard key={movie.id} movie={movie}/>
  ))


  return (
    <div className="movieListing">
      {renderMovies}
    </div>
  )
}

export default MovieListing