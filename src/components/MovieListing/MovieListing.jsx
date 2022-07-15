import React from 'react'
import { Grid } from '@mui/material'
import MovieCard from '../MovieCard/MovieCard'
import TVCard from '../TVCard/TVCard'
import './MovieListing.scss'

function MovieListing({movies, type}) {
  return (
    <section className="movieListing">
        <Grid container spacing={{xs: 1, md: 2, lg: 3}}>
        {movies.results?.map((movie, index) => (
            <Grid item xs={4} sm={3} md={2.4} key={movie.id}>
                {type==='movie'?<MovieCard movie={movie} />:<TVCard show={movie} />}
            </Grid>
            ))
        }
        </Grid>
    </section>
  )
}

export default MovieListing