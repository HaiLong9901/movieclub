import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../NowPlayingMovie/NowPlayingMovie'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncPopularMovies, fetchAsyncPopularShows, fetchAsyncTopRateMovies, fetchAsyncUpComingMovies} from '../../features/movies/moviesSlice'
import Title from '../Title/Title'
import Slider from 'react-slick'
import { setting } from '../../common/setting'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import PopularMovies from '../PopularMovies/PopularMovies'
import UpComingMovies from '../UpComingMovies/UpComingMovies'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncTopRateMovies())
  }, [dispatch])

  return (
    <div className="home">
      <UpComingMovies />
      <Title>Popular</Title>
      <PopularMovies />
      <Title>Top rated</Title>
      <TopRatedMovies />
      <Title>Now playing</Title>
      <MovieListing />
    </div>
  )
}

export default Home