import React from 'react'
import { Container, Typography, Box } from '@mui/material'

function PageNotFound() {
  return (
    <Container sx={{
      width: '100vw',
      height: '100vh',
      bgcolor: 'primary.blueColor',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} className='pageNotFound'>
      <Box sx={{
        width: '50%',
        // height: '30%',
        p: '2rem',
        borderWidth: '0.1rem',
        borderColor: 'primary.yellowColor',
        borderRadius: '.5rem'
      }}>
        <Typography sx={{
          color: 'white',
          fontSize: '3rem',
          fontWeight: 700
        }}
        variant='h1' component={'h2'}>Opps, Page is not found</Typography>
      </Box>
    </Container>
  )
}

export default PageNotFound