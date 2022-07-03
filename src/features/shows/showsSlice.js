import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { api_key } from "../../common/apis/MovieApiKey";

const initialState = {
    shows: [],
    detailShow: {},
    status: 'idle',
    error: ''
}

export const fetchAsyncDetailShow = createAsyncThunk('movies/fetchAsyncDetailShow', async (showId) => {
    if(showId) {
        const detail = await movieApi.get(`3/tv/${showId}?api_key=${api_key}&language=en-US`)

        return detail
    }

    return {}
})

export const showsSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {
        setPostStatus: (state) => {
            state.status = 'idle'
        }
    },

    extraReducers(builder) {
        builder
            .addCase(fetchAsyncDetailShow.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAsyncDetailShow.fulfilled, (state, {payload}) => {
                state.status = 'successfully'
                state.detailShow = payload
            })
            .addCase(fetchAsyncDetailShow.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const getDetailShow = state => state.movies.detailShow

export const { setPostStatus } = showsSlice.actions

export default showsSlice.reducer