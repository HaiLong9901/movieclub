import React from 'react'
import unkownActor from '../../images/unknown.jfif'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setStatus } from '../../features/actors/actorSlice'
import './ActorCard.scss'


function ActorCard({actor}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector(state => state.actors)
  return (
    <div className="actorCard" onClick={() => {
        navigate('/')
        dispatch(setStatus(state))
    }}>
        <div className="actorCard__inner">
            <div className="actorCard__top">
            <img src={actor.profile_path?`https://image.tmdb.org/t/p/original/${actor.profile_path}`:unkownActor} alt={actor.original_name} />
            </div>
            <div className="actorCard__bottom">
            <h4 className={actor.profile_path?null:'unknown'}>{actor.original_name}</h4>
            <span className={actor.profile_path?null:'unknown'}>{actor.character}</span>
            </div>
      </div>
    </div>
  )
}

export default ActorCard