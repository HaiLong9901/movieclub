import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncDetailMovie } from '../../features/movies/moviesSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncDetailMovie(297762))
  }, [dispatch])

  return (
    <div className="home">
      {/* <div className="home__banner">Home</div> */}
      <div className="home__title"><h3>Now playing</h3></div>
      <MovieListing />
      <div className="home__title"><h3>Popular movie</h3></div>
    </div>
  )
}

export default Home