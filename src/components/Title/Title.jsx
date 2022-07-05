import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Title.scss'

function Title(props) {
  const navigate = useNavigate()
  const data = props.children
  const seeAll = props.seeAll
  const linkTo = props.linkTo
  return (
    <div className='title'>
        <h3>{data}</h3>
        {seeAll?<span onClick={() => navigate(linkTo)}>{seeAll}</span>:null}
    </div>
  )
}

export default Title