import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailMovie, getDetailMovie } from '../../../features/movies/moviesSlice'
import { useParams } from 'react-router-dom'
import { AiFillStar, AiFillEye, AiOutlineYoutube } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'
import { Button, Avatar, Grid, Chip, Container, Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import Title from '../../../components/Title/Title'
import { settingForReview } from '../../../common/settingForReview'
import MovieCard from '../../../components/MovieCard/MovieCard'
import Loading from '../../../components/Loading/Loading'
import ActorCard from '../../../components/ActorCard/ActorCard'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
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
      // <div className="movieDetail" style={{
      //   background: `linear-gradient(0, rgba(225,225,225,0.2), rgba(3,76,101,0.5)), url("https://image.tmdb.org/t/p/w500/${detail.backdrop_path}") no-repeat fixed center`,
      // }}>
      //   <div className="movieDetail__wrapper">
      //       <div className="movieDetail__container">
      //       <div className="movieDetail__left">
      //         <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="" />
      //       </div>
      //       <div className="movieDetail__right">
      //         <div className="movieDetail__description">
      //           <h2 className='movieDetail__description__title'>{detail.title}</h2>
      //           <div className="movieDetail__description__rate">
      //             <span className='imdbRate'>IMDB: {detail.vote_average} <AiFillStar /></span>
      //             <span className='viewRate'>{detail.popularity} <AiFillEye /></span>
      //           </div>
      //           <div className="movieDetail__description__infor">
      //             <span className='status'>Status: {detail.status}</span>
      //             <span className='runtime'>Runtime: {detail.runtime}m</span>
      //             <span className='release'>Release date: {detail.release_date}</span>
      //             <span className='budget'>Budget: ${detail.budget}</span>
      //             <span className='genres'>Genres: {detail.genres?.map(genre => (
      //               <Chip label={genre.name} variant="outlined" />
      //             ))}</span>
  
      //           </div>
      //           <div className="movieDetail__description__overview">
      //             <p className='overview'>{detail.overview}</p>
      //           </div>
      //         </div>
      //         <Button variant='contained' startIcon={<AiOutlineYoutube />} className='movieDetail__description__button'>Trailer</Button>
      //       </div>
      //     </div>
      //     <Title>Casts</Title>
      //     <div className="movieDetail__actors">
      //       <Slider { ...setting }>
      //         {actorInfor?.map(actor => (
      //           <ActorCard key={actor.id} actor={actor} />
      //         ))}
      //       </Slider>
      //     </div>
      //     <Title>Reviews</Title>
      //     <div className="movieDetail__reviews">
      //       <Slider {...settingForReview}>
      //           {reviews?.map(review => (
      //             <div className="movieDetail__reviews__card">
      //             <div className="movieDetail__reviews__card__header">
      //               <div className="movieDetail__reviews__card__header__img">
      //                 <Avatar src={review.author_details.avatar_path?review.author_details.avatar_path.substring(1):''} />
      //               </div>
      //               <h3 className='movieDetail__reviews__card__header__name'>{review.author_details.username}</h3>
      //               <FaQuoteRight className='movieDetail__reviews__card__header__quote'/>
      //             </div>
      //             <div className="movieDetail__reviews__card__infor">
      //               <p>Created at: {review.created_at?parseDate(review.created_at):''}</p>
      //               <span>Rate: {review.author_details.rating} <AiFillStar className='movieDetail__reviews__card__infor__star'/></span>
      //             </div>
      //             <div className="movieDetail__reviews__card__content">
      //               <p>{review.content?review.content.substring(0,100).concat(' . . .'):''}</p>
      //             </div>
      //           </div>
      //           ))}
      //       </Slider>
      //     </div>
      //     <Title>Similar movies</Title>
      //     <div className="movieDetail__similarMovies">
      //       <Grid container spacing={2}>
      //         {similar?.map((movie, index) =>{
      //           if(index < 6) return  (
      //             <Grid item xs={2} key={movie.id}>
      //               <MovieCard movie={movie} />
      //             </Grid>
      //           )
      //           return ;
      //         })}
      //       </Grid>
            
      //     </div>
          
      //   </div> 
        
      // </div>
      <Container className='movieDetail' maxWidth='xl' sx={{
        width: '100%',
        mg: 0,
        px: {xs: '1rem', md: '2rem', lg: '5rem'},
        py: {xs: '1rem', md: '2rem'},
        boxSizing: 'border-box'
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
            <img src="https://image.tmdb.org/t/p/original//9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="" style={{
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
            }}>Doctor Strange</Typography>
            <Typography variant='body1' component='span'>IMDB</Typography>
            <Typography variant='body1' component='span'>Release Date</Typography>
            <Typography variant='body1' component='span'>Budget</Typography>
            <Typography variant='body1' component='span'>Genres</Typography>
            <Typography variant='body1' component='p'>When his daughter is murdered, William Duncan takes the law into his own hands, setting out on a quest for retribution. After killing the street thug responsible for her death, he finds himself in the middle of a war with the thug's brother, father, and their gang, who are equally hell-bent on getting even. What ensues is a tense back-and-forth game of vengeance. By the end, William comes to find that the quest for revenge never has a winner.</Typography>
            <Button variant='contained'>Trailer</Button>
          </Box>
          <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
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
              sx={{ position: 'absolute', bottom: 16, right: 16, display: { xs: 'block', lg: 'none'} }}
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