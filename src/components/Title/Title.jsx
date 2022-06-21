import React from 'react'
import './Title.scss'

function Title(props) {
  const data = props.children
  console.log(data)
  return (
    <div className='title'>
        <h3>{data}</h3>
    </div>
  )
}

export default Title