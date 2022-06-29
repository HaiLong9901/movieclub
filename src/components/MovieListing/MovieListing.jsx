import React from 'react'
import './MovieListing.scss'
import MovieCard from '../MovieCard/MovieCard'
import { Grid } from '@mui/material'
import { useGetMoviesQuery } from '../../features/api/apiSlice'
import Loading from '../Loading/Loading'

function MovieListing() {

  const {
    data: movies = {},
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMoviesQuery()

  let renderMovies = movies.results?.map((movie, index) => {
    return (
      <Grid item xs={6} sm={4} md={2.4} key={movie.key}>
        <MovieCard movie={movie} />
      </Grid>
    )
  } )

  let content

  if(isLoading) {
    content = <Loading />
  } else if(isSuccess) {
    content = renderMovies
  } else if(isError) {
    content = <h3>{error.toString()}</h3>
  }

  console.log('Movie: ', movies)


  return (
    <div className="movieListing">
      <Grid container spacing={3}>
        {content}
      </Grid>
    </div>
  )
}

export default MovieListing