import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import moviesReducer from './movies/moviesSlice'
import showsReducer from "./shows/showsSlice";
import actorsReducer from "./actors/actorSlice";
import { apiSlice } from "./api/apiSlice";

export default configureStore({
    reducer: {
        movies: moviesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        shows: showsReducer,
        actors: actorsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiSlice.middleware)

})