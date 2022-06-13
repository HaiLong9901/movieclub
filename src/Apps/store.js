import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from '../features/Todolist/TodoListSlice'

export default configureStore({
    reducer: {
        TodoList: todoListReducer
    }
})