import React from 'react'
import { getPopularMovies } from '../../features/movies/moviesSlice'
import { useSelector } from 'react-redux'
import TVCard from '../TVCard/TVCard'
import Slider from 'react-slick'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import './PopularMovies.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const setting = {
  dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      // autoplay: true,
      // autoplaySpeed: 5000,
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}
function PopularMovies() {
  const [alignment, setAlignment] = useState('movies')

  const movies = useSelector(getPopularMovies)
  // const shows = useSelector(getPopularMovies())
  const handleChange = (event, newAlignMent) => {
    setAlignment(newAlignMent)
    // setType(prev => prev==='movie'?'tv':'movie')
  }
  // data = shows
  // useEffect(() => {
  //   data = alignment==='movies'?movies:shows
  // }, [alignment])

  return (
    <div className="popularMovies">
      <div className="toggle__button">
      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      >
        <ToggleButton value="movies">Movies</ToggleButton>
        <ToggleButton value="shows">Shows</ToggleButton>
      </ToggleButtonGroup>

      </div>
        <Slider {...setting}>
            {movies?movies.map(movie => (
                // <MovieCard key={movie.id} movie={movie} />
                <TVCard key={movie.id} show={movie} />
            )):''}
        </Slider>
    </div>
  )
}

export default PopularMovies