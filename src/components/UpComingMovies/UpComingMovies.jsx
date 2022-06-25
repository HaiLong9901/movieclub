import React from 'react'
import { useSelector } from 'react-redux'
import { getUpComingMovies } from '../../features/movies/moviesSlice'
import Slider from 'react-slick'
import { Button } from '@mui/material'
import { AiOutlineYoutube } from 'react-icons/ai'
import './UpComingMovies.scss'

const setting = {
    dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
}
function UpComingMovies() {

  const movies = useSelector(getUpComingMovies)
  return (
    <div className="upComingMovies">
        <Slider {...setting}>
            {movies?movies.map(movie => (
                <div className="upComingMovies__card">
                    <div className="upComingMovies__card__container">
                        <div className="upComingMovies__card__container__description">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <div className="upComingMovies__card__container__description__button">
                            <Button variant='contained' startIcon={<AiOutlineYoutube />} className='movieDetail__description__button'>Trailer</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )):''}
        </Slider>
    </div>
  )
}

export default UpComingMovies