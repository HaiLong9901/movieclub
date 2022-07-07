import React from 'react'
import Loading from '../../components/Loading/Loading'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useGetMoviesQuery } from '../../features/api/apiSlice'
import { Grid, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import { useState } from 'react'
import './MoviePage.scss'

function MoviePage() {
  const [genre, setGenre] = useState('All')
  const handleChange = (e) => {
    e.target.value = genre
  }
  const {
    data: list,
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetMoviesQuery()

  let content
  if(isFetching) {
    content = <Loading />
  } else if (isSuccess) {
    content = (
        <Grid container spacing={3}>
            {list.results?.map(movie =>(
                <Grid item xs={6} sm={4} md={2.4} key={movie.id}>
                    <MovieCard movie={movie} />
                </Grid>   
            ))}
        </Grid>
        
    )
  } else if (isError) {
    content = <p>{error.toString()}</p>
  }
  return (
    <section className="moviePage">
        <Box sx={{maxWidth: '30%',
        paddingBottom: '2rem'
    
    }}> 
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Genres"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
        
        {content}
    </section>
  )
}

export default MoviePage