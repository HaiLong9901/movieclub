import React from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <h2>Welcome to Todolist's App</h2>
        <div className="NavBar__list">
            <Link to='/' className='NavBar__list__item'>Home</Link>
            <Link to='/' className='NavBar__list__item'>Make to do list</Link>
        </div>
    </div>
  )
}

export default NavBar