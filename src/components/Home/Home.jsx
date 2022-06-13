import React, { useEffect } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { api_key } from '../../common/apis/MovieApiKey'

function Home() {

  // console.log(movieApi.get())

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`3/movie/550?api_key=${api_key}&language=en-US&page=1`)
      .catch(err => console.log(err))
      console.log('res: ', response)
    }
    fetchMovies()
    // fetch(`
    // https://api.themoviedb.org/3/movie/550?api_key=434100939988b6276d424c1350b0fdfc&language=en-US`, {
    //   method: 'GET'
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
  }, [])

  return (
    <div className="home">
      <div className="home__banner"></div>
      <MovieListing />
    </div>
  )
}

export default Home