import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className="header">
      <h2 className="header__logo">MovieClub</h2>
      <div className="header__menu">
        <Link to='/' className='header__menu__item'>Home</Link>
        <Link to='/movie' className='header__menu__item' >Movie</Link>
        <Link to='/' className='header__menu__item' >About us</Link>
        <Link to='/' className='header__menu__item' >Contact</Link>
      </div>
    </div>
  )
}

export default Header