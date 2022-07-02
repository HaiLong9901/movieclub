import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailMovie, getDetailMovie } from '../../features/movies/moviesSlice'
import { useParams } from 'react-router-dom'
import { AiFillStar, AiFillEye, AiOutlineYoutube } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import { Button, Avatar, Grid, Chip } from '@mui/material'
import Slider from 'react-slick'
import Title from '../Title/Title'
import { setting } from '../../common/setting'
import { settingForReview } from '../../common/settingForReview'
import './MovieDetail.scss'
import unkownActor from '../../images/unknown.jfif'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'


function MovieDetail() {
  const param = useParams()
  const movieId = param.imdbID
  const postStatus = useSelector(state => state.movies.status)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchAsyncDetailMovie(movieId))
  }, [movieId, dispatch, movieId])

  const data = useSelector(getDetailMovie)
  
  const parseDate = (date) => {
    const time = new Date(Date.parse(date)).toUTCString()
    return time
  }

  const { detail, actors, similar, reviews } = data

  const actorInfor = actors?.filter((value, index, array) => value.known_for_department === 'Acting')

  console.log('status is: ', postStatus)
  console.log('actors are: ', actors?.filter((value, index, array) => value.known_for_department === 'Directing'))

  let content = 'hello';

  if(postStatus === 'loading') {
    content = <Loading />
  } else if(postStatus === 'successfully') {
    console.log('fetch success')
    content = (
      <div className="movieDetail" style={{
        background: `linear-gradient(0, rgba(225,225,225,0.2), rgba(3,76,101,0.5)), url("https://image.tmdb.org/t/p/w500/${detail.backdrop_path}") no-repeat fixed center`,
      }}>
        <div className="movieDetail__wrapper">
            <div className="movieDetail__container">
            <div className="movieDetail__left">
              <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="" />
            </div>
            <div className="movieDetail__right">
              <div className="movieDetail__description">
                <h2 className='movieDetail__description__title'>{detail.title}</h2>
                <div className="movieDetail__description__rate">
                  <span className='imdbRate'>IMDB: {detail.vote_average} <AiFillStar /></span>
                  <span className='viewRate'>{detail.popularity} <AiFillEye /></span>
                </div>
                <div className="movieDetail__description__infor">
                  <span className='status'>Status: {detail.status}</span>
                  <span className='runtime'>Runtime: {detail.runtime}m</span>
                  <span className='release'>Release date: {detail.release_date}</span>
                  <span className='budget'>Budget: ${detail.budget}</span>
                  <span className='genres'>Genres: {detail.genres?.map(genre => (
                    <Chip label={genre.name} variant="outlined" />
                  ))}</span>
  
                </div>
                <div className="movieDetail__description__overview">
                  <p className='overview'>{detail.overview}</p>
                </div>
              </div>
              <Button variant='contained' startIcon={<AiOutlineYoutube />} className='movieDetail__description__button'>Trailer</Button>
            </div>
          </div>
          <Title>Casts</Title>
          <div className="movieDetail__actors">
            <Slider { ...setting }>
              {actorInfor?.map(actor => (
                <div className="movieDetail__actors__card" key={actor.id}>
                  <div className="movieDetail__actors__card__img">
                    <img src={actor.profile_path?`https://image.tmdb.org/t/p/original/${actor.profile_path}`:unkownActor} alt={actor.original_name} /> 
                  </div>
                  <div className="movieDetail__actors__card__infor">
                    <h5>{actor.original_name}</h5>
                    <span>{actor.character}</span>
                  </div>
                </div>
                // <ActorCard key={actor.id} actor={actor} />
              ))}
            </Slider>
          </div>
          <Title>Reviews</Title>
          <div className="movieDetail__reviews">
            <Slider {...settingForReview}>
                {reviews?.map(review => (
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
                ))}
            </Slider>
          </div>
          <Title>Similar movies</Title>
          <div className="movieDetail__similarMovies">
            <Grid container spacing={2}>
              {similar?.map((movie, index) =>{
                if(index < 6) return  (
                  <Grid item xs={2} key={movie.id}>
                    <MovieCard movie={movie} />
                  </Grid>
                )
                return ;
              })}
            </Grid>
            
          </div>
          
        </div> 
        
      </div>
    )
  } else if(postStatus === 'failed') {
    content = <h1>Failed</h1>
  }

  return (
    <>
    {content}
    </>
    
  )
}

export default MovieDetail