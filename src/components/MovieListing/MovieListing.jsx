import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './MovieListing.scss'
import { getAllMovies } from '../../features/movies/moviesSlice'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import { setting } from '../../common/setting'
import { Grid } from '@mui/material'

function MovieListing() {

  const movies = useSelector(getAllMovies)
  console.log(movies)

  let renderMovies = movies.map((movie, index) => {
    // if(index > 10) return ;
    return (
      <Grid item xs={2.4} key={movie.key}>
        <MovieCard movie={movie} />
      </Grid>
    )
  } )


  return (
    <div className="movieListing">
      <Grid container spacing={3}>
        {renderMovies}
      </Grid>
    </div>
  )
}

export default MovieListing