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
       return response.data
    }

    return {}
    
})

export const fetchAsyncActors = createAsyncThunk('movies/fetchAsyncActors', async (movieId) => {
    if(movieId) {
        const response = await movieApi.get(`3/movie/${movieId}/casts?api_key=${api_key}`)
        return response.data.cast
    }
})

export const fetchAsyncReviews = createAsyncThunk('movies/fetchAsyncReviews', async (movieId) => {
    if(movieId) {
        const response = await movieApi.get(`3/movie/${movieId}/reviews?api_key=${api_key}`)
        return response.data.results
    }
})

export const fetchAsyncSimilarMovies = createAsyncThunk('movies/fetchAsyncSimilarMovies', async (movieId) => {
    if(movieId) {
        const response = await movieApi.get(`3/movie/${movieId}/similar?api_key=${api_key}`)

        return response.data.results
    }
})

export const fetchAsyncTopRateMovies = createAsyncThunk('movies/fetchAsyncTopRateMovies', async () => {
    const response = await movieApi.get(`3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)

    return response.data.results
})

export const fetchAsyncPopularMovies = createAsyncThunk('movies/fetchAsyncPopularMovies', async () => {
    const response = await movieApi.get(`3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    return response.data.results
})

export const fetchAsyncUpComingMovies = createAsyncThunk('movies/fetchAsyncUpComingMovies', async () => {
    const response = await movieApi.get(`3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
    console.log('upcoming: ', response)
    return response.data.results
})

const initialState = {
    movies: [],
    detailMovie: {},
    actors: [],
    reviews: [],
    similar: [],
    topRate: [],
    popular: [],
    upComing: []
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
            console.log('successfully!!!')

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
        },
        [fetchAsyncSimilarMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncSimilarMovies.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, similar: payload }
        },
        [fetchAsyncSimilarMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncTopRateMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncTopRateMovies.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, topRate: payload }
        },
        [fetchAsyncTopRateMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncPopularMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncPopularMovies.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, popular: payload }
        },
        [fetchAsyncPopularMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncUpComingMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncUpComingMovies.fulfilled]: (state, {payload}) => {
            console.log('successfully!!!')

            return {...state, upComing: payload }
        },
        [fetchAsyncUpComingMovies.rejected]: () => {
            console.log('rejected')
        }
    }
})

export const { addMovie } = moviesSlice.actions

export const getAllMovies = state => state.movies.movies
export const getDetailMovie = state => state.movies.detailMovie
export const getActors = state => state.movies.actors
export const getReviews = state => state.movies.reviews
export const getSimilarMovies = state => state.movies.similar
export const getTopRateMovies = state => state.movies.topRate
export const getPopularMovies =  state => state.movies.popular
export const getUpComingMovies = state => state.movies.upComing

export default moviesSlice.reducer