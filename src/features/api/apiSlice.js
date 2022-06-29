import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key } from '../../common/apis/MovieApiKey'

export const apiSlice = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org'}),

    endpoints: builder => ({
        getMovies: builder.query({
            query: () => `3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
        }),

        getPopularMoviesOrShows: builder.query({
            query: (type) => `3/${type}/popular?api_key=${api_key}&language=en-US&page=1`
        })
    })
})

export const { useGetMoviesQuery, useGetPopularMoviesOrShowsQuery } = apiSlice