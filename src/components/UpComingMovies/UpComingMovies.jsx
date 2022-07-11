import React from 'react'
import Slider from 'react-slick'
import { Button, Box, Typography } from '@mui/material'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbFileDescription } from 'react-icons/tb'
import { useGetUpComingMoviesQuery } from '../../features/api/apiSlice'
import './UpComingMovies.scss'
import Loading from '../Loading/Loading'
import { bgcolor, height } from '@mui/system'

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
        {/* <Slider {...setting}>
            {movies.results?.map(movie => (
                <Box className="upComingMovies__card"
                sx={{
                  py: { xm: '.5rem', md: '2rem', xl: '5rem'},
                  display: 'flex',
                  flexDirection: { sm: 'column', md: 'row'}
                }}
                 key={movie.id}>
                    <div className="upComingMovies__card__container" style={{
                        background: `linear-gradient(0, rgba(3,76,101,0.8), rgba(225,225,225,0.2)), url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}") no-repeat fixed center`,
                    }}>
                        <div className="upComingMovies__card__container__description">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <div className="upComingMovies__card__container__description__button">
                            <Button variant='contained' startIcon={<AiOutlineYoutube />} className='movieDetail__description__button'>Trailer</Button>
                            <Button variant='contained' startIcon={<TbFileDescription />} className='movieDetail__description__button'>Show detail</Button>
                            </div>
                        </div>

                        <div className="upComingMovies__card__container__image">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                        </div>
                    </div>
                </Box>
            ))}
        </Slider> */}
        <Box sx={{
          width: '100%',
          // height: { xs: '20rem', sm: '30rem', lg: '40rem'},
          height : { xs: '80vh', lg: '100vh'},
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row'},
          px: { xs: '.5rem', md: '5rem', lg: '15rem'},
          alignItems: 'center',
          justifyContent: { xs: 'space-around', lg: 'space-between'},
          boxSizing: 'border-box'
        }}>
          <Box sx={{
            width: '50%',
          }}>
            <Typography variant='h1' component='h2' sx={{
              color: 'white',
              fontWeight: 500,
              fontSize: { xs: '2rem', md: '3rem', lg: '5rem'},
              textAlign: { xs: 'center', lg: 'left'}
              
            }}>Hello</Typography>
            <Typography variant='body1' component='p' sx={{
              color: 'white',
              display: { xs: 'none', lg: 'block'}
            }}>lacoocacoweaoe</Typography>
          </Box>
          <Box sx={{
            width: { xs: '50%', lg: '30%'},
            borderRadius: '.5rem',
            overflow: 'hidden'
          }}>
            <img src='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fthor-love-and-thunder-character-posters-first-look-info-010.jpg?q=75&w=800&cbr=1&fit=max' />
          </Box>
        </Box>
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