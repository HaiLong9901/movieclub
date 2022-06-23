import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncTopRateMovies, getTopRateMovies} from '../../features/movies/moviesSlice'
import Title from '../Title/Title'
import Slider from 'react-slick'
import { setting } from '../../common/setting'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncTopRateMovies())
  }, [dispatch])

  // const topRatedMovies = useSelector(getTopRateMovies)

  // console.log('topRated: ', topRatedMovies)
  return (
    <div className="home">
      <Title>Top rated</Title>
      <TopRatedMovies />
      <Title>Now playing</Title>
      <MovieListing />
      <div className="home__title"><h3>Popular movie</h3></div>
    </div>
  )
}

export default Home