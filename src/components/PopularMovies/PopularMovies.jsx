import React, { useState } from 'react'
import { useGetPopularMoviesOrShowsQuery } from '../../features/api/apiSlice'
import TVCard from '../TVCard/TVCard'
import Slider from 'react-slick'
import { ToggleButton, ToggleButtonGroup, Skeleton, Box } from '@mui/material'
import './PopularMovies.scss'
import Loading from '../Loading/Loading'
import MovieCard from '../MovieCard/MovieCard'
import Title from '../Title/Title'


const setting = {
  dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
}
function PopularMovies() {
  const [alignment, setAlignment] = useState('movie')

  const {
    data: movies = {},
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPopularMoviesOrShowsQuery(alignment)

  const handleChange = (event, newAlignMent) => {
    console.log('prev', alignment)
    if(newAlignMent===null) newAlignMent = alignment
    setAlignment(newAlignMent)
    console.log('after', newAlignMent)
  }


  let content

  if(isLoading) {
    content = <Skeleton />
  } else if(isSuccess) {
    content = <>
    <Title>Popular</Title>
    <div className="toggle__button">
      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      >
        <ToggleButton className='toggle__button__btn' value="movie">Movies</ToggleButton>
        <ToggleButton className='toggle__button__btn' value="tv">Shows</ToggleButton>
      </ToggleButtonGroup>

      </div>
        <Slider {...setting}>
            {movies.results?.map(movie => (
                  alignment==='movie'?<MovieCard key={movie.id} movie={movie} />:<TVCard key={movie.id} show={movie} />
              ))}
        </Slider>
    </>
  } else if(isError) {
    content = <p>{error.toString()}</p>
  }

  return (
    <Box sx={{
      width: '100%',
      px: { xs: '0.5rem', sm: '1rem', md: '2rem', lg: '5rem'},
      boxSizing: 'border-box'
    }} className="popularMovies">
        {content}
    </Box>
  )
}

export default PopularMovies