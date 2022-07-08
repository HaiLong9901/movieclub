import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { api_key } from "../../common/apis/MovieApiKey";

const initialState = {
    shows: [],
    detailShow: {},
    showList: [],
    casts: [],
    status: 'idle',
    error: ''
}

export const fetchAsyncDetailShow = createAsyncThunk('shows/fetchAsyncDetailShow', async (showId) => {
    if(showId) {
        const detail = await movieApi.get(`3/tv/${showId}?api_key=${api_key}&language=en-US`)
        const casts = await movieApi.get(`3/tv/${showId}}/credits?api_key=${api_key}&language=en-US`)

        return {
            detail: detail.data,
            casts: casts.data.cast
        }
    }

    return {}
})

export const fetchAsyncShowList = createAsyncThunk('shows/fetchAsyncShowList', async (page) => {
    const list = await movieApi.get(`3/tv/on_the_air?api_key=${api_key}&language=en-US&page=${page}`)
    return list.data
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
                // state.error = action.error.message
            })
            .addCase(fetchAsyncShowList.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAsyncShowList.fulfilled, (state, {payload}) => {
                state.status = 'successfully'
                state.showList = payload
            })
            .addCase(fetchAsyncShowList.rejected, (state, action) => {
                state.status = 'failed'
                // state.error = action.error.message
            })
    }
})

export const getDetailShow = state => state.shows.detailShow
export const getShowList = state => state.shows.showList
export const { setPostStatus } = showsSlice.actions

export default showsSlice.reducer