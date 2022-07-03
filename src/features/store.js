import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import moviesReducer from './movies/moviesSlice'
import showsSlice from "./shows/showsSlice";
import { apiSlice } from "./api/apiSlice";

export default configureStore({
    reducer: {
        movies: moviesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        shows: showsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)

})