import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieListing from '../../components/MovieListing/MovieListing'
import { Pagination, Stack } from '@mui/material'
import Loading from '../../components/Loading/Loading'
import { fetchAsyncShowList, getShowList, getPostStatus, setPostStatus } from '../../features/shows/showsSlice'
import './ShowPage.scss'

function ShowPage() {
  const dispatch = useDispatch()
  const status = useSelector(state => state.shows.status)
  const [page, setPage] = useState(1)
  const handleChange2 = (e, value) => {
    setPage(value)
    dispatch(setPostStatus())

  }

  useEffect(() => {
    console.log('status: ', status)
    if(status === 'idle') {
        dispatch(fetchAsyncShowList(page))
    }
    
  }, [dispatch, page, status])

  console.log('page: ', page)
  const data = useSelector(getShowList)
  let content
  if(status === 'loading') {
    content = <Loading />
  } else if(status === 'successfully') {
    content = (
        <MovieListing movies={data} type='show' />
    )
  } else if(status === 'failed') {
    content = <p>Failed</p>
  }
  
  return (
    <section className="showPage">
        {content}

        <Stack className='moviePage__pavigation' spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange2} />
        </Stack>
    </section>
  )
}

export default ShowPage