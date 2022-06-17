import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailMovie, getDetailMovie } from '../../features/movies/moviesSlice'
import { useParams } from 'react-router-dom'
import './MovieDetail.scss'

function MovieDetail() {
  const param = useParams()
  const movieId = param.imdbID
  const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchAsyncDetailMovie(movieId))
   }, [dispatch,movieId])

  const data = useSelector(state => state.movies.detailMovie)
  console.log(data)
  return (
    <div className="movieDetail" style={{
      background: `url("https://image.tmdb.org/t/p/w500/${data.backdrop_path}") no-repeat fixed center`,
    }}>
      {/* <div className="movieDetail__background">
        <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
      </div> */}
      <div className="movieDetail__container">
        <div className="movieDetail__left">
          <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
        </div>
        <div className="movieDetail__right">
          <div className="movieDetail__description">
            <h2 className='movieDetail__description__title'>{data.title}</h2>
            <div className="movieDetail__description__rate">
              <span className='imdbRate'>{data.status}</span>
              <span className='viewRate'>{data.popularity}</span>
            </div>
            <div className="movieDetail__infor">
              <span className='national'></span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail