import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import './Loading.scss'
import { FaBoxTissue } from 'react-icons/fa'

function Loading() {
  return (
    <Box className="Loading" sx={{
      width: '100vw',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <CircularProgress className='circularLoading' sx={{
          color: 'primary.yellowColor'
        }} />
    </Box>
  )
}

export default Loading