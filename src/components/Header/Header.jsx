import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@mui/material'
import { BiCameraMovie } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

function Header() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    console.log('close')
    setAnchorEl(null)
  }
  return (
    <div className="header">
      <h2 className="header__logo" onClick={() => navigate('/')}>MovieClub<BiCameraMovie className='header__logo__icon' /></h2>
      <div className="header__menu">
        <Link to='/' className='header__menu__item'>Home</Link>
        <Link to='/movies' className='header__menu__item'>Movie</Link>      
        <Link to='/shows' className='header__menu__item'>Shows</Link>      
        <Link to='/' className='header__menu__item' >About us</Link>
        <Link to='/' className='header__menu__item' >Contact</Link>

        <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        >
          <MenuItem onClose={handleClose}>mot</MenuItem>
          <MenuItem onClose={handleClose}>hai</MenuItem>
          <MenuItem onClose={handleClose}>ba</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Header