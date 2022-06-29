import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import moviesReducer from './movies/moviesSlice'
import { apiSlice } from "./api/apiSlice";

export default configureStore({
    reducer: {
        movies: moviesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)

})