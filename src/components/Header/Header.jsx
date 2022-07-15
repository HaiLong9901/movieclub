
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon  from '@mui/icons-material/Menu'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useNavigate } from 'react-router-dom'
import unknown from '../../images/unknown.jfif'
import './Header.scss'

const pages = [{
  page: 'Home',
  link: '/'
}, {page: 'Movie',
link: '/movies'}, {
  page: 'Show',
  link:'/shows'
}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
        bgcolor: 'primary.yellowColor'
      }}>
        <Toolbar disableGutters>
          <SlideshowIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: .5, ml: 5, fontSize: '2rem', color: 'primary.purpleColor' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontSize: '1.8rem',
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.blueColor',
              textDecoration: 'none',
              mr: '5rem',
              cursor: 'pointer'
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
              sx={{
                color: 'primary.blueColor'
              }}
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
                }} sx={{
                }}>
                  <Typography textAlign="center" sx={{
                    fontSize: '1rem',
                    color: 'primary.yellowColor'
                  }}>{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SlideshowIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '1.5rem', color: 'primary.purpleColor' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'primary.blueColor',
              textDecoration: 'none',
              fontSize: '1.3rem',
              cursor: 'pointer'
            }}
          >
            MovieClub
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
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

          <Box sx={{ flexGrow: 0, mr: { xs: '1rem', md: '2rem'} }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={unknown} />
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
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{
                    color: 'white'
                  }} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={() => {
                handleCloseUserMenu()
                navigate('/user/login')
              }}>
                <Typography sx={{
                  color: 'white'
                }} textAlign='center'>Login</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



export default Header