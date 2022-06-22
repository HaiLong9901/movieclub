import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncTopRateMovies, getTopRateMovies} from '../../features/movies/moviesSlice'
import Title from '../Title/Title'
import Slider from 'react-slick'
import { setting } from '../../common/setting'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncTopRateMovies())
  }, [dispatch])

  const popularMovies = useSelector(getTopRateMovies)

  console.log('popular: ', popularMovies)
  return (
    <div className="home">
      {/* <div className="home__banner">Home</div> */}
      <Title>Now playing</Title>
      <MovieListing />
      <div className="home__title"><h3>Popular movie</h3></div>
    </div>
  )
}

export default Home