import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/moviesSlice'

export default configureStore({
    reducer: {
        movies: moviesReducer
    }
})