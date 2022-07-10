// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Button, Menu, MenuItem } from '@mui/material'
// import { BiCameraMovie } from 'react-icons/bi'
// import { useNavigate } from 'react-router-dom'
// import './Header.scss'

// function Header() {
//   const navigate = useNavigate()
//   const [anchorEl, setAnchorEl] = useState(null)
//   const open = Boolean(anchorEl)
//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget)
//   }
//   const handleClose = () => {
//     console.log('close')
//     setAnchorEl(null)
//   }
//   return (  
//     <div className="header">
//       <h2 className="header__logo" onClick={() => navigate('/')}>MovieClub<BiCameraMovie className='header__logo__icon' /></h2>
//       <div className="header__menu">
//         <Link to='/' className='header__menu__item'>Home</Link>
//         <Link to='/movies' className='header__menu__item'>Movie</Link>      
//         <Link to='/shows' className='header__menu__item'>Shows</Link>      
//         {/* <Link to='/' className='header__menu__item' >About us</Link>
//         <Link to='/' className='header__menu__item' >Contact</Link> */}

//         <Menu
//         id='basic-menu'
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button'
//         }}
//         >
//           <MenuItem onClose={handleClose}>mot</MenuItem>
//           <MenuItem onClose={handleClose}>hai</MenuItem>
//           <MenuItem onClose={handleClose}>ba</MenuItem>
//         </Menu>
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon  from '@mui/icons-material/Menu'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#034C65'
    },
    secondary: {
      main: '#000'
    }
  }
})


const pages = [{
  page: 'Home',
  link: '/'
}, {page: 'Movie',
link: '/movies'}, {
  page: 'Show',
  link:'/shows'
}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const link = ['/', '/movies', '/shows']

const Header = () => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
        bgcolor: '#FCB677'
      }}>
        <Toolbar disableGutters>
          <SlideshowIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: .5, ml: 5, fontSize: '2rem' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontSize: '1.8rem',
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.main',
              textDecoration: 'none',
              mr: '5rem'
            }}
          >
            MovieClub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={() => {
                  handleCloseNavMenu()
                  navigate(page.link)
                }}>
                  <Typography textAlign="center" sx={{
                    fontSize: '.8rem',
                    color: '#fff'
                  }}>{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SlideshowIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '2rem' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.3rem'
            }}
          >
            MovieClub
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => {
                  handleCloseNavMenu()
                  navigate(page.link)
                }}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '1rem' }}
              >
                {page.page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};



export default Header