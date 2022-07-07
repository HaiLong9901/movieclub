import React ,{ useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useGetMoviesQuery, useGetMovieListsQuery, useGetFindQuery } from '../../features/api/apiSlice'
import { Grid, FormControl, InputLabel, Select, MenuItem, Box, PaginationItem, Pagination, Stack } from '@mui/material'
import { Link, useLocation, Route, Routes, MemoryRouter, useParams, Navigate, useNavigate } from 'react-router-dom'
import './MoviePage.scss'

// function Content() {
//     const location = useLocation()
//     const query = new URLSearchParams(location.search)
//     const page = parseInt(query.get('page')||'1',10)
//     return (
//         <Pagination
//         page={page}
//         count={10}
//         renderItem={item => (
//             <PaginationItem
//             component={Link}
//             to={`/movies${item.page === 1 ? '' :`?page=${item.page}`}`}
//             {...item}
//         />)}
//          />
//     )

// }

function MoviePage() {
//   const [genre, setGenre] = useState('All')
  const [page, setPage] = useState(1)
//   const handleChange = (e) => {
//     e.target.value = genre
//   }
  const handleChange2 = (e, value) => {
    setPage(value)
  }
  useEffect(() => {

  }, [page])
  const {
    data: list,
    isFetching,
    isSuccess,
    isError,
    error
  } = useGetMovieListsQuery(!page?1:page)

  let content
  if(isFetching) {
    content = <Loading />
  } else if (isSuccess) {
    content = (
        <Grid container spacing={3}>
            {list.results?.map(movie =>(
                <Grid item xs={6} sm={4} md={2.4} key={movie.id}>
                    <MovieCard movie={movie} />
                </Grid>   
            ))}
        </Grid>
        
    )
  } else if (isError) {
    content = <p>{error.toString()}</p>
  }
  return (
    <section className="moviePage">
        {/* <Box sx={{maxWidth: '30%',
        paddingBottom: '2rem'
    
    }}> 
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label="Genres"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box> */}
        
        {content}

        <Stack className='moviePage__pavigation' spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange2} />
        </Stack>

        {/* <MemoryRouter initialEntries={['/movies']} initialIndex={0}> */}
        {/* <Routes>
             <Route path='*' element={<Content />} />
        </Routes> */}
               
        {/* </MemoryRouter> */}
    </section>
  )
}

export default MoviePage