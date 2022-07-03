import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailShow, getDetailShow, setPostStatus } from '../../features/shows/showsSlice'
import './TVCard.scss'

function TVCard({show}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector(state => state.shows)
  return (
    <div className="tvCard" onClick={() => {
      dispatch(setPostStatus(status))
      navigate(`/shows/${show.id}`)
    }}>
        <div className="tvCard__inner">
            <div className="tvCard__inner__top">
                <img src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} alt="" />
            </div>
            <div className="tvCard__inner__bottom">
                <h3>{show.name}</h3>
                <span>{show.vote_average}/10 <AiFillStar className='tvCard__inner__icon'/></span>
            </div>
        </div>
    </div>
  )
}

export default TVCard