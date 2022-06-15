import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { api_key } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie, fetchAsyncMovies } from '../../features/movies/moviesSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch])

  return (
    <div className="home">
      <div className="home__banner">Home</div>
      <MovieListing />
    </div>
  )
}

export default Home