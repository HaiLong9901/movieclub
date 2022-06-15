import React from 'react'
import './MovieCard.scss'
import { useNavigate } from 'react-router-dom'

function MovieCard(props) {

  const { movie } = props
  const navigate = useNavigate()

  return (
    <div className="movieCard" onClick={() => navigate(`/movie/${movie.id}`)}>
      <div className="movieCard__inner">
        <div className="movieCard__top">
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
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