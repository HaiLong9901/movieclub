import React, { useEffect, useState } from 'react'
import './MovieListing.scss'
import movieApi from '../../common/apis/movieApi'
import { api_key } from '../../common/apis/MovieApiKey'

function MovieListing() {
  // const imgURL = `https://image.tmdb.org/t/p/original/${image}`
  const [opt, setOpt] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await movieApi.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
      .catch(err => console.log(err))
      setOpt(response.data.genres)
    }

    fetchData()
  }, [])
  return (
    <div className="movieListing">
      <select name="movie" id="movie">
        <option value="0"></option>
        {opt.map(op => (
          <option key={op.id} value={op.id}>{op.name}</option>
        ))}
      </select>
    </div>
  )
}

export default MovieListing