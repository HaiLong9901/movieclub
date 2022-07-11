import React, { useEffect } from 'react'
import './Home.scss'
import MovieListing from '../NowPlayingMovie/NowPlayingMovie'
import { useDispatch } from 'react-redux'
import { fetchAsyncTopRateMovies} from '../../features/movies/moviesSlice'
import Title from '../Title/Title'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import PopularMovies from '../PopularMovies/PopularMovies'
import UpComingMovies from '../UpComingMovies/UpComingMovies'
import { Container } from '@mui/material'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncTopRateMovies())
  }, [dispatch])

  return (
    <Container maxWidth='xl' sx={{
      p: { xs: 0, xl: 0}
    }} className="home">
      <UpComingMovies />
      <Title>Popular</Title>
      <PopularMovies />
      <Title>Top rated</Title>
      <TopRatedMovies />
      <Title>Now playing</Title>
      <MovieListing />
    </Container>
  )
}

export default Home