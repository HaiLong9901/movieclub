import React from 'react'
import { useSelector } from 'react-redux'
import { getUpComingMovies } from '../../features/movies/moviesSlice'
import Slider from 'react-slick'
import { Button } from '@mui/material'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbFileDescription } from 'react-icons/tb'
import './UpComingMovies.scss'

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

  const movies = useSelector(getUpComingMovies)
  return (
    <div className="upComingMovies" >
        <Slider {...setting}>
            {movies?movies.map(movie => (
                <div className="upComingMovies__card" key={movie.id}>
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
                </div>
            )):''}
        </Slider>
    </div>
  )
}

export default UpComingMovies