import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './TVCard.scss'

function TVCard({show}) {
  return (
    <div className="tvCard">
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