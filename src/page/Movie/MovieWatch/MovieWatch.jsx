import React from 'react'
import { useParams} from 'react-router-dom' 
import { Container, Box, Typography, Rating, Stack } from '@mui/material'
import { useGetDetailMovieQuery, useGetRecommendMoviesQuery } from '../../../features/api/apiSlice'
import Loading from '../../../components/Loading/Loading'
import MovieCard from '../../../components/MovieCard/MovieCard'

function MovieWatch() {
  const { imdbId } = useParams()
  const { imdbID } = useParams()

  const {
    data: detail = {},
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetDetailMovieQuery(imdbID)

  const {
    data: list = [],
    isFetching: listFetch = true,
    isSuccess: listSuccess = true,
    isError: listError = true,
    error: error2 = ''
  } = useGetRecommendMoviesQuery(imdbID)

  console.log(detail)

  let content
  let right

  if(isFetching) {
    content = <Loading />
  } else if (isSuccess) {
    content = (
      <Box sx={{
        width: { xs: '100%', lg: '70%'}
      }}>
          <iframe style={{
              width: '100%',
              aspectRatio: '16/9'
          }} src={`https://2embed.org/embed/movie?imdb=${imdbId}`} frameborder="0" allowFullScreen></iframe>
          <Typography sx={{
            fontSize: { xs: '2rem', md: '2.5rem'},
            color: 'white',
            fontWeight: 700,
          }} variant='h2' component='h2'>{detail.title}</Typography>
          <Rating name="customized-10" defaultValue={Math.floor(detail.vote_average)} max={10} readOnly />
          <Typography sx={{
            color: 'white'
          }} variant='body1' component='p'>{detail.overview}</Typography>
      </Box>
    )
  } else if(isError) {
    content = <p>{error.tostring()}</p>
  }

  if(listFetch) {
    right = <Loading />
  } else if(listSuccess) {
    right = (
      <Stack sx={{
        width: '20%',
        height: '80vh',
        overflowY: 'scroll',
        px: '1rem'
      }} spacing={4}>
      {list.results?.map(movie => <MovieCard movie={movie} />)}
      </Stack>
    )
  } else if(listError) {
    right = <p>{error2.tostring()}</p>
  }


  console.log('imdb: ', imdbID)
  return (
    <Container maxWidth='xl' sx={{
        width: '100%',
        px: { xs: '1rem', md: '2rem', lg: '5rem'},
        py: '2rem',
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        {content}
        {right}
    </Container>
  )
}

export default MovieWatch