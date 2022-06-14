import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, {payload}) => {
            state.movies = payload
        }
    }
})

export const { addMovie } = moviesSlice.actions

export const getAllMovies = state => state.movies.movies

export default moviesSlice.reducer