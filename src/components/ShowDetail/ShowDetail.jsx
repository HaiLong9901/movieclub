import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailShow, getDetailShow } from '../../features/shows/showsSlice'
import { AiFillStar, AiFillEye, AiOutlineYoutube } from 'react-icons/ai'
import { Button, Avatar, Grid, Chip } from '@mui/material'
import Loading from '../Loading/Loading'
import Title from '../Title/Title'
import Slider from 'react-slick'
import ActorCard from '../ActorCard/ActorCard'
import './ShowDetail.scss'

const setting = {
  dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

function ShowDetail() {
  const { showId } = useParams() 
  const dispatch = useDispatch()
  const postStatus = useSelector(state => state.shows.status)

  useEffect(() => {
    dispatch(fetchAsyncDetailShow(showId))
    window.scrollTo(0, 0)
  }, [dispatch, showId])

  const data = useSelector(getDetailShow)

  const { detail, casts } = data

  console.log(detail)
  let content
  if(postStatus === 'loading') {
    content = <Loading />
  } else if(postStatus === 'successfully') {
    content = (
      <div className="showsDetail" style={{
        background: `linear-gradient(0, rgba(225,225,225,0.2), rgba(3,76,101,0.5)), url("https://image.tmdb.org/t/p/w500/${detail.backdrop_path}") no-repeat fixed center`,
      }}>
        <div className="showsDetail__wrapper">
            <div className="showsDetail__container">
            <div className="showsDetail__left">
              <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="" />
            </div>
            <div className="showsDetail__right">
              <div className="showsDetail__description">
                <h2 className='showsDetail__description__title'>{detail.name}</h2>
                <div className="showsDetail__description__rate">
                  <span className='imdbRate'>IMDB: {detail.vote_average} <AiFillStar /></span>
                  <span className='viewRate'>{detail.popularity} <AiFillEye /></span>
                </div>
                <div className="showsDetail__description__infor">
                  <span className='status'>Status: {detail.status}</span>
                  <span className='runtime'>Lates season: {detail.last_episode_to_air.season_number}</span>
                  <span className='network'>Network:<small className='showsDetail__company'><img src={detail.networks?.map(path => `https://image.tmdb.org/t/p/original/${path.logo_path}`)} alt="" /></small> </span>
                  <span className='genres'>Genres: {detail.genres?.map(genre => (
                    <Chip label={genre.name} variant="outlined" style={{
                      marginLeft: '1rem'
                    }} />
                  ))}</span>
  
                </div>
                <div className="showsDetail__description__overview">
                  <p className='overview'>{detail.overview}</p>
                </div>
              </div>
              <Button variant='contained' startIcon={<AiOutlineYoutube />} className='showsDetail__description__button'>Trailer</Button>
            </div>
          </div>
          <Title>Casts</Title>
          <div className="showsDetail__actors">
            <Slider { ...setting }>
              {casts?.map(actor => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </Slider>
          </div>
          <Title>Seasons</Title>
          <div className="showsDetail__seasons">
                {detail.seasons?.map(season => (
                  <div className="showsDetail__seasons__card">
                    <div className="showsDetail__seasons__card__image">
                      <img src={`https://image.tmdb.org/t/p/original/${season.poster_path}`} alt={season.name}/>
                    </div>
                    <div className="showsDetail__seasons__card__infor">
                      <h3>{season.name}</h3>
                      <span>{season.air_date} | {season.episode_count} Episodes</span>
                      <p>{season.overview?.substring(0,100)}...</p>
                    </div>
                  </div>
                ))}
          </div>
          { /*
          <Title>Reviews</Title>
          <div className="showsDetail__reviews">
            <Slider {...settingForReview}>
                {reviews?.map(review => (
                  <div className="showsDetail__reviews__card">
                  <div className="showsDetail__reviews__card__header">
                    <div className="showsDetail__reviews__card__header__img">
                      <Avatar src={review.author_details.avatar_path?review.author_details.avatar_path.substring(1):''} />
                    </div>
                    <h3 className='showsDetail__reviews__card__header__name'>{review.author_details.username}</h3>
                    <FaQuoteRight className='showsDetail__reviews__card__header__quote'/>
                  </div>
                  <div className="showsDetail__reviews__card__infor">
                    <p>Created at: {review.created_at?parseDate(review.created_at):''}</p>
                    <span>Rate: {review.author_details.rating} <AiFillStar className='showsDetail__reviews__card__infor__star'/></span>
                  </div>
                  <div className="showsDetail__reviews__card__content">
                    <p>{review.content?review.content.substring(0,100).concat(' . . .'):''}</p>
                  </div>
                </div>
                ))}
            </Slider>
          </div>
          <Title>Similar movies</Title>
          <div className="showsDetail__similarMovies">
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
          
        </div>  */}
        </ div>
        
      </div>
    )
  }
  return (
    <section className="showDetail">
        {content}
    </section>
  )
}

export default ShowDetail