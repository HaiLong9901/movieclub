import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@mui/material'
import './Header.scss'

function Header() {
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
      <Link to='/'><h2 className="header__logo">MovieClub</h2></Link>
      <div className="header__menu">
        <Link to='/' className='header__menu__item'>Home</Link>
        <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'basic-menu' : undefined}
        onClick={handleClick}
        >
          <Link to='/' className='header__menu__item' >Movie</Link>
        </Button>
        
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