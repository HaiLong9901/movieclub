import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    content: '',
    completed: false
}

const JobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {
        jobAdded
    }
})

export default JobSlice.reducer