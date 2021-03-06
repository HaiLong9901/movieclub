import React ,{ useState, useEffect } from 'react'
import Loading from '../../../components/Loading/Loading'
import { useGetMovieListsQuery, useGetSearchQuery } from '../../../features/api/apiSlice'
import { Pagination, Stack, Box } from '@mui/material'
import MovieListing from '../../../components/MovieListing/MovieListing'
import './MoviePage.scss'


function MoviePage() {
  const [page, setPage] = useState(1)
  const handleChange2 = (e, value) => {
    setPage(value)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])
  const search = useGetSearchQuery()
  console.log('Search: ', search)
  const {
    data: list,
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetMovieListsQuery(page)

  let content
  if(isFetching) {
    content = <Loading />
  } else if (isSuccess) {
    content = (
        <MovieListing movies={list} type='movie' />
    )
  } else if (isError) {
    content = <p>{error.toString()}</p>
  }
  return (
    <Box sx={{
      width: '100%',
      px: { xs: '0.5rem', sm: '1rem', md: '2rem', lg: '5rem'},
      py: { xs: '1rem', md: '2rem'},
      boxSizing: 'border-box',
    }} className="moviePage">

        
        {content}

        <Stack className='moviePage__pavigation' spacing={2}>
            <Pagination count={34361} page={page} onChange={handleChange2} />
        </Stack>
    </Box>
  )
}

export default MoviePage