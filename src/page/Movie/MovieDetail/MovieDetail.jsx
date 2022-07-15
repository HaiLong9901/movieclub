import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailMovie, getDetailMovie } from '../../../features/movies/moviesSlice'
import { useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineYoutube } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import { Button, Avatar, Grid, Chip, Container, Box, Typography} from '@mui/material'
import Slider from 'react-slick'
import Title from '../../../components/Title/Title'
import { settingForReview } from '../../../common/settingForReview'
import MovieCard from '../../../components/MovieCard/MovieCard'
import Loading from '../../../components/Loading/Loading'
import ActorCard from '../../../components/ActorCard/ActorCard'
import { SpeedDial, SpeedDialIcon, SpeedDialAction} from '@mui/material';
import { BsListCheck, BsHeart, BsStar, BsShare } from 'react-icons/bs'
import './MovieDetail.scss'

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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
}

const actions = [
  { icon: <BsListCheck />, name: 'Add to watch list' },
  { icon: <BsHeart />, name: 'Add to favorite list' },
  { icon: <BsStar />, name: 'Rate it!' },
  { icon: <BsShare />, name: 'Share it!' },
];

function MovieDetail() {
  const param = useParams()
  const movieId = param.imdbID
  const postStatus = useSelector(state => state.movies.status)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchAsyncDetailMovie(movieId))
  }, [movieId, dispatch])

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
      <Container className='movieDetail' maxWidth='xl' sx={{
        width: '100%',
        mg: 0,
        px: {xs: '1rem', md: '2rem', lg: '5rem'},
        py: {xs: '1rem', md: '2rem'},
        boxSizing: 'border-box',
        background: `linear-gradient(0, rgba(225,225,225,0.2), rgba(3,76,101,0.5)), url("https://image.tmdb.org/t/p/original/${detail.backdrop_path}") no-repeat fixed center`,
      }} >
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          gap: '2rem',
          alignItems: { xs: 'center', lg: 'flex-start'}
        }}>
          <Box sx={{
            width: { xs: '50%', md: '30%', lg: '20%'},
            borderRadius: '.5rem',
            overflow: 'hidden'
          }}>
            <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="" style={{
              width: '100%',
              borderRadius: '.5rem',
            }} />
          </Box>
          <Box sx={{
            width: { xs: '90%', md: '60%', lg: '50%'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: {xs: '.5rem', lg: '1rem'}
          }}>
            <Typography variant='h3' component='h2' sx={{
              color: 'white',
              fontSize: { xs: '2rem', lg: '3rem'},
              textAlign: 'center'
            }}>{detail.title}</Typography>
            <Typography variant='body1' component='span'>Rate: {detail.vote_average}</Typography>
            <Typography variant='body1' component='span'>Release Date: {detail.release_date}</Typography>
            <Typography variant='body1' component='span'>Runtime: {detail.runtime}m</Typography>
            <Typography variant='body1' component='span'>Budget: ${detail.budget}</Typography>
            <Typography variant='body1' component='span'>Genres: {detail.genres?.map(genre => (
                <Chip sx={{
                  ml: '1rem'
                }} label={genre.name} variant="outlined" />
            ))}</Typography>
            <Typography variant='body1' component='p'>{detail.overview}</Typography>
            <Button sx={{
              width: {lg: '30%', xs: '50%'},
              bgcolor: 'primary.blueColor'
            }} variant='contained'>Trailer</Button>
          </Box>
          <Box sx={{ 
            height: 320, 
            transform: 'translateZ(0px)', 
            width: { xs: '100%', md: '0'},
            flexGrow: 1 }}>
            <SpeedDial direction='down'
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', top: 16, left: 16, display: { xs: 'none', lg: 'block'} }}
              icon={<SpeedDialIcon />}>
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
          </SpeedDial>
            <SpeedDial direction='right'
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', top: 10, left: 16, display: { xs: 'block', lg: 'none'} }}
              icon={<SpeedDialIcon />}>
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
          </SpeedDial>
          </Box>
        </Box>

        <Title>Casts</Title>
           <div className="movieDetail__actors">
            <Slider { ...setting }>
               {actorInfor?.map(actor => (
                <ActorCard key={actor.id} actor={actor} />
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
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
              {similar?.map((movie, index) =>{
                if(index < 6) return  (
                  <Grid item xs={2} sm={4} md={2} key={movie.id}>
                    <MovieCard movie={movie} />
                  </Grid>
                )
                return ;
              })}
            </Grid>
            </div>
      </Container>
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