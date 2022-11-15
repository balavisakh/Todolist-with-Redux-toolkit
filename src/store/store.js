import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../features/todolist/todoListSlice';

export const store = configureStore({
    reducer:{
        todolist: todoListReducer
    }
})