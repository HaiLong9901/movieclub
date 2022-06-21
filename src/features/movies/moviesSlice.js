import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { api_key } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const response = await movieApi.get(`3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)

    return response.data.results
})
export const fetchAsyncDetailMovie = createAsyncThunk('movies/fetchAsyncDetailMovie', async (movieId) => {
    if(movieId) {
       const response = await movieApi.get(`3/movie/${movieId}?api_key=${api_key}&append_to_response=videos`)
       console.log(response.data)
       return response.data 
    }

    return {}
    
})

export const fetchAsyncActors = createAsyncThunk('movies/fetchAsyncActors', async (movieId) => {
    if(movieId) {
        const response = await movieApi.get(`3/movie/${movieId}/casts?api_key=${api_key}`)
        console.log('cast: ', response.data)
        return response.data
    }
})

export const fetchAsyncReviews = createAsyncThunk('movies/fetchAsyncReviews', async (movieId) => {
    if(movieId) {
        const response = await movieApi.get(`3/movie/${movieId}/reviews?api_key=${api_key}`)
        console.log('reviews: ', response.data)
        return response.data
    }
})

const initialState = {
    movies: [],
    detailMovie: {},
    actors: [],
    reviews: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, {payload}) => {
            state.movies = payload
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!', payload)

            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncDetailMovie.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncDetailMovie.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, detailMovie: payload}
        },
        [fetchAsyncDetailMovie.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncActors.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncActors.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, actors: payload }
        },
        [fetchAsyncActors.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncReviews.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncReviews.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, reviews: payload }
        },
        [fetchAsyncReviews.rejected]: () => {
            console.log('rejected')
        }
    }
})

export const { addMovie } = moviesSlice.actions

export const getAllMovies = state => state.movies.movies
export const getDetailMovie = state => state.movies.detailMovie
export const getActors = state => state.movies.actors
export const getReviews = state => state.movies.reviews

export default moviesSlice.reducer