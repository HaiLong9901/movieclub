import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncDetailActor = createAsyncThunk('actors/fetchAsyncDetailActor', async () => {
    return null
})

const initialState = {
    actorDetal: {},
    status: 'idle'
}
const actorReducer = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        setStatus: state => state.status = 'idle'
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAsyncDetailActor.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAsyncDetailActor.fulfilled, (state, {payload}) => {
                state.status = 'succesfully'
                state.actorDetal = payload
            })
            .addCase(fetchAsyncDetailActor.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})

export const { setStatus } = actorReducer.actions
export default actorReducer.reducer