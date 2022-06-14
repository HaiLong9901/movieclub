import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { api_key } from '../../common/apis/MovieApiKey'

function Home() {
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`http://api.themoviedb.org/3/movie/297762/casts?api_key=${api_key}`)
      .catch(err => console.log(err))
      console.log('res: ', response)
    
      setCast(response.data.cast)
    }
    fetchMovies()
  }, [])
  console.log('cast: ',cast)
  return (
    <div className="home">
      <div className="home__banner"></div>
      {cast.map(actor => (
        <div className="actorCard" key={actor.id}>
          <span>{actor.name}</span>
          <img width='50' src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} />
        </div>
      ))}
    </div>
  )
}

export default Home