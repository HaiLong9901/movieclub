import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncActors, fetchAsyncDetailMovie, fetchAsyncReviews, fetchAsyncSimilarMovies, getActors, getDetailMovie, getReviews, getSimilarMovies } from '../../features/movies/moviesSlice'
import { useParams } from 'react-router-dom'
import { AiFillStar, AiFillEye, AiOutlineYoutube } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import { Button, Avatar, Grid, Item } from '@mui/material'
import Slider from 'react-slick'
import Title from '../Title/Title'
import { setting } from '../../common/setting'
import { settingForReview } from '../../common/settingForReview'
import './MovieDetail.scss'
import unkownActor from '../../images/unknown.jfif'
import MovieCard from '../MovieCard/MovieCard'

function MovieDetail() {
  const param = useParams()
  const movieId = param.imdbID
  const movieType = param.type
  console.log('type: ', movieType)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(fetchAsyncDetailMovie(movieId))
   dispatch(fetchAsyncActors(movieId))
   dispatch(fetchAsyncReviews(movieId))
   dispatch(fetchAsyncSimilarMovies(movieId))
  }, [dispatch,movieId])

  //  const data = useSelector(state => state.movies.detailMovie)
  const data = useSelector(getDetailMovie)
  const actors = useSelector(getActors)
  const reviews = useSelector(getReviews)
  const similarMovies = useSelector(getSimilarMovies)

  console.log('similar: ', similarMovies)

  const parseDate = (date) => {
    const time = new Date(Date.parse(date)).toUTCString()
    return time
  }
  return (
    <div className="movieDetail" style={{
      background: `url("https://image.tmdb.org/t/p/w500/${data.backdrop_path}") no-repeat fixed center`,
    }}>
      <div className="movieDetail__wrapper">
          <div className="movieDetail__container">
          <div className="movieDetail__left">
            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
          </div>
          <div className="movieDetail__right">
            <div className="movieDetail__description">
              <h2 className='movieDetail__description__title'>{data.title}</h2>
              <div className="movieDetail__description__rate">
                <span className='imdbRate'>IMDB: {data.vote_average} <AiFillStar /></span>
                <span className='viewRate'>{data.popularity} <AiFillEye /></span>
              </div>
              <div className="movieDetail__description__infor">
                <span className='status'>Status: {data.status}</span>
                <span className='genres'>Genres: {data.genres?data.genres.map(genre => genre.name.concat(' ')):''}</span>

              </div>
              <div className="movieDetail__description__overview">
                <p className='overview'>{data.overview}</p>
              </div>
            </div>
            <Button variant='contained' startIcon={<AiOutlineYoutube />} className='movieDetail__description__button'>Trailer</Button>
          </div>
        </div>
        {/* <div className='movieDetail__sector'><h3>Casts</h3></div> */}
        <Title>Casts</Title>
        <div className="movieDetail__actors">
          <Slider { ...setting }>
            {actors?actors.map(actor => (
              <div className="movieDetail__actors__card" key={actor.id}>
                <div className="movieDetail__actors__card__img">
                  <img src={actor.profile_path?`https://image.tmdb.org/t/p/original/${actor.profile_path}`:unkownActor} alt={actor.original_name} />
                </div>
                <div className="movieDetail__actors__card__infor">
                  <h5>{actor.original_name}</h5>
                  <span>{actor.character}</span>
                </div>
              </div>
            )):''}
          </Slider>
        </div>
        <Title>Reviews</Title>
        <div className="movieDetail__reviews">
          <Slider {...settingForReview}>
              {reviews?reviews.map(review => (
                <div className="movieDetail__reviews__card">
                <div className="movieDetail__reviews__card__header">
                  <div className="movieDetail__reviews__card__header__img">
                    <Avatar src={review.author_details.avatar_path?review.author_details.avatar_path.substring(1):''} />
                  </div>
                  <h3 className='movieDetail__reviews__card__header__name'>{review.author_details.username}</h3>
                  <FaQuoteRight className='movieDetail__reviews__card__header__quote'/>
                </div>
                <div className="movieDetail__reviews__card__infor">
                  <p>Created at: {review.created_at?parseDate(review.created_at):''}</p>
                  <span>Rate: {review.author_details.rating} <AiFillStar className='movieDetail__reviews__card__infor__star'/></span>
                </div>
                <div className="movieDetail__reviews__card__content">
                  <p>{review.content?review.content.substring(0,100).concat(' . . .'):''}</p>
                </div>
              </div>
              )):''}
          </Slider>
        </div>
        <Title>Similar movies</Title>
        <div className="movieDetail__similarMovies">
          <Grid container spacing={2}>
            {similarMovies?similarMovies.map(movie => (
              <Grid item xs={2} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            )):''}
          </Grid>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default MovieDetail