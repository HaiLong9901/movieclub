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
        }),

        getUpComingMovies: builder.query({
            query: () => `3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
        }),

        getTopRatedMovies: builder.query({
            query: () => `3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        }),

        getDetailMovie: builder.query({
            query: (movieId) => `3/movie/${movieId}/reviews?api_key=${api_key}`
        }),

        getActors: builder.query({
            query: movieId => `3/movie/${movieId}/casts?api_key=${api_key}`
        }),

        getReviews: builder.query({
            query: movieId => `3/movie/${movieId}/reviews?api_key=${api_key}`
        }),

        getSimilarMovies: builder.query({
            query: movieId => `3/movie/${movieId}/similar?api_key=${api_key}`
        })
    })
})

export const { useGetMoviesQuery, useGetPopularMoviesOrShowsQuery, useGetUpComingMoviesQuery, useGetTopRatedMoviesQuery,
useGetDetailMovieQuery, useGetActorsQuery, useGetReviewsQuery, useGetSimilarMoviesQuery } = apiSlice