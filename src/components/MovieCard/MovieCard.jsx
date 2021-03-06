import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setPostStatus } from '../../features/movies/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import './MovieCard.scss'


function MovieCard({movie}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector(state => state.movies)

  return ( 
    <div className="movieCard" onClick={() => {
      navigate(`/movies/${movie.id}`)
      dispatch(setPostStatus(state))
    }}>
      <div className="movieCard__inner">
        <div className="movieCard__top">
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} loading='lazy' alt={movie.title} />
        </div>
        <div className="movieCard__bottom">
          <h4>{movie.title}</h4>
          <span>{movie.popularity}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard