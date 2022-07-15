import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailShow, getDetailShow } from '../../features/shows/showsSlice'
import { AiFillStar, AiFillEye, AiOutlineYoutube } from 'react-icons/ai'
import { Button, Avatar, Grid, Chip, Container, SpeedDial, SpeedDialAction, SpeedDialIcon, Box, Typography } from '@mui/material'
import Loading from '../Loading/Loading'
import Title from '../Title/Title'
import Slider from 'react-slick'
import { BsListCheck, BsHeart, BsStar, BsShare } from 'react-icons/bs'
import ActorCard from '../ActorCard/ActorCard'
import './ShowDetail.scss'

const actions = [
  { icon: <BsListCheck />, name: 'Add to watch list' },
  { icon: <BsHeart />, name: 'Add to favorite list' },
  { icon: <BsStar />, name: 'Rate it!' },
  { icon: <BsShare />, name: 'Share it!' },
];
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
      // <div className="showsDetail" style={{
      //   background: `linear-gradient(0, rgba(225,225,225,0.2), rgba(3,76,101,0.5)), url("https://image.tmdb.org/t/p/w500/${detail.backdrop_path}") no-repeat fixed center`,
      // }}>
      //   <div className="showsDetail__wrapper">
      //       <div className="showsDetail__container">
      //       <div className="showsDetail__left">
      //         <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="" />
      //       </div>
      //       <div className="showsDetail__right">
      //         <div className="showsDetail__description">
      //           <h2 className='showsDetail__description__title'>{detail.name}</h2>
      //           <div className="showsDetail__description__rate">
      //             <span className='imdbRate'>IMDB: {detail.vote_average} <AiFillStar /></span>
      //             <span className='viewRate'>{detail.popularity} <AiFillEye /></span>
      //           </div>
      //           <div className="showsDetail__description__infor">
      //             <span className='status'>Status: {detail.status}</span>
      //             <span className='runtime'>Lates season: {detail.last_episode_to_air.season_number}</span>
      //             <span className='network'>Network:<small className='showsDetail__company'><img src={detail.networks?.map(path => `https://image.tmdb.org/t/p/original/${path.logo_path}`)} alt="" /></small> </span>
      //             <span className='genres'>Genres: {detail.genres?.map(genre => (
      //               <Chip label={genre.name} variant="outlined" style={{
      //                 marginLeft: '1rem'
      //               }} />
      //             ))}</span>
  
      //           </div>
      //           <div className="showsDetail__description__overview">
      //             <p className='overview'>{detail.overview}</p>
      //           </div>
      //         </div>
      //         <Button variant='contained' startIcon={<AiOutlineYoutube />} className='showsDetail__description__button'>Trailer</Button>
      //       </div>
      //     </div>
      //     <Title>Casts</Title>
      //     <div className="showsDetail__actors">
      //       <Slider { ...setting }>
      //         {casts?.map(actor => (
      //           <ActorCard key={actor.id} actor={actor} />
      //         ))}
      //       </Slider>
      //     </div>
      //     <Title>Seasons</Title>
      //     <div className="showsDetail__seasons">
      //           {detail.seasons?.map(season => (
      //             <div className="showsDetail__seasons__card">
      //               <div className="showsDetail__seasons__card__image">
      //                 <img src={`https://image.tmdb.org/t/p/original/${season.poster_path}`} alt={season.name}/>
      //               </div>
      //               <div className="showsDetail__seasons__card__infor">
      //                 <h3>{season.name}</h3>
      //                 <span>{season.air_date} | {season.episode_count} Episodes</span>
      //                 <p>{season.overview?.substring(0,100)}...</p>
      //               </div>
      //             </div>
      //           ))}
      //     </div>
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
            }}>{detail.name}</Typography>
            <Typography variant='body1' component='span'>Rate: {detail.vote_average} <AiFillStar /></Typography>
            <Typography variant='body1' component='span'>Release Date: {detail.release_date}</Typography>
            <Typography variant='body1' component='span'>Lates season: {detail.last_episode_to_air.season_number}</Typography>
            <Typography sx={{
              display: 'flex'
            }} variant='body1' component='span'>Network:<Box sx={{
              width: {xs: '30%', sm: '20%', md: '10%'},
              ml: '1rem',
            }} className='showsDetail__company'><img style={{
              width: '100%'
            }} src={detail.networks?.map(path => `https://image.tmdb.org/t/p/original/${path.logo_path}`)} alt="" /></Box> </Typography>
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
               {casts?.map(actor => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </Slider>
          </div>

          </Container>)
  }
  return (
    <section className="showDetail">
        {content}
    </section>
  )
}

export default ShowDetail