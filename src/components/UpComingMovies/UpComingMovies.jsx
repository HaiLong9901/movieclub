import React from 'react'
import Slider from 'react-slick'
import { Button, Box, Typography } from '@mui/material'
import { TbFileDescription } from 'react-icons/tb'
import { useGetUpComingMoviesQuery } from '../../features/api/apiSlice'
import { useNavigate } from 'react-router'
import './UpComingMovies.scss'
import Loading from '../Loading/Loading'

const setting = {
    dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
}
function UpComingMovies() {
  const navigate = useNavigate()
  const {
    data: movies = {},
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUpComingMoviesQuery()
  
  let content

  if(isLoading) {
    content = <Loading />
  } else if(isSuccess) {
    content = <>
        <Slider {...setting}>
            {movies.results?.map(movie => (
                <Box sx={{
                  width: '100%'
                }}>
                <Box className='upComingMovies' sx={{
                  width: '100%',
                  height : { xs: '80vh', lg: '100vh'},
                  display: { xs: 'flex'},
                  flexDirection: { xs: 'column-reverse', lg: 'row'},
                  px: { xs: '.5rem', md: '5rem', lg: '15rem'},
                  alignItems: 'center',
                  justifyContent: { xs: 'space-around', lg: 'space-between'},
                  boxSizing: 'border-box',
                  background: `linear-gradient(0, rgba(3,76,101,0.8), rgba(225,225,225,0.2)), url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}") no-repeat fixed center`,
                  backgroundSize: 'cover'
                }}>
                  <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: '1rem', lg: '2rem'},
                    alignItems: 'center'
                  }}>
                    <Typography variant='h1' component='h2' sx={{
                      color: 'white',
                      fontWeight: 500,
                      fontSize: { xs: '2rem', md: '3rem', lg: '4rem'},
                      textAlign: { xs: 'center', lg: 'left'},

                      
                    }}>{movie.title}</Typography>
                    <Typography variant='body1' component='p' sx={{
                      color: 'white',
                      display: { xs: 'none', lg: 'block'},
                      textAlign: 'left'
                    }}>{movie.overview}</Typography>
                    <Button sx={{
                      width: { xs: '60%', lg: '30%'},
                      bgcolor: 'primary.yellowColor'
        
                    }}
                    variant='contained'
                    startIcon={ <TbFileDescription />}
                    onClick={() => navigate(`/movies/${movie.id}`) }
                    >Discover</Button>
                  </Box>
                  <Box sx={{
                    width: {xs: '50%', md: '30%'},
                    borderRadius: '.5rem',
                    overflow: 'hidden'
                  }}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                  </Box>
                </Box>
                </Box>
            ))}
        </Slider>
        
    </>
  } else if(isError) {
    content = <p>{error.toString()}</p>
  }
  return (
    <div className="upComingMovies" >
        {content}
    </div>
  )
}

export default UpComingMovies