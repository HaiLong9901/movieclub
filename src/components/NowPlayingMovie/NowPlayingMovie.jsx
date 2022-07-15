import React from 'react'
import { Box } from '@mui/material'
import MovieCard from '../MovieCard/MovieCard'
import { Grid } from '@mui/material'
import { useGetMoviesQuery } from '../../features/api/apiSlice'
import Loading from '../Loading/Loading'
import Title from '../Title/Title'
import './NowPlayingMovie.scss'

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
      <Grid item xs={6} sm={4} md={2.4} key={movie.id}>
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
    <Box sx={{
      width: '100%',
      px: { xs: '0.5rem', sm: '1rem', md: '2rem', lg: '5rem'},
      boxSizing: 'border-box',
      mb: '2rem'
    }} className="nowPlayingMovie">
      <Title>Now playing</Title>
      <Grid container spacing={3}>
        {content}
      </Grid>
    </Box>
  )
}

export default MovieListing