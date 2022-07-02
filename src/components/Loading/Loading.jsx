import React from 'react'
import { LinearProgress, CircularProgress } from '@mui/material'
import './Loading.scss'

function Loading() {
  return (
    <div className="Loading">
        <LinearProgress className='linearLoading' />
        <CircularProgress className='circularLoading' />
    </div>
  )
}

export default Loading