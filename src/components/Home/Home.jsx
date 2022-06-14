import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { api_key } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../features/movies/moviesSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
      .catch(err => console.log(err))
      dispatch(addMovie(response.data.results))
    }
    fetchMovies()
  }, [])

  return (
    <div className="home">
      <div className="home__banner">Home</div>
      <MovieListing />
    </div>
  )
}

export default Home