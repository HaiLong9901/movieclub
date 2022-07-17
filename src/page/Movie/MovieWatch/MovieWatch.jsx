import React from 'react'
import { useParams} from 'react-router-dom' 
import { Container, Box } from '@mui/material'

function MovieWatch() {
  const { imdbId } = useParams()
  return (
    <Container maxW5idth='lg' sx={{
        width: '100',
        height: '100vh',
        px: { xs: '1rem', md: '2rem', lg: '5rem'},
        py: '2rem'
    }}>
        <Box>
            <iframe style={{
                width: '100%',
                aspectRatio: '16/9'
            }} src={`https://2embed.org/embed/movie?imdb=${imdbId}`} frameborder="0" allowFullScreen></iframe>
        </Box>
    </Container>
  )
}

export default MovieWatch