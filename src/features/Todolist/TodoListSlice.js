import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
    id: '',
    text: 'gdfgd'
}]

const TodoListReducer = createSlice({
    name: 'TodoList',
    initialState,
    reducers: {
        jobAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { jobAdded } = TodoListReducer.actions

export default TodoListReducer.reducer