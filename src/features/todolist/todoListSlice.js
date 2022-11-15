import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listItems: [],
    listNameByIndex: '',
    listIndex: ''
}

export const todoListSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addList: (state, action) => {
            return {
                ...state,
                listItems : [...state.listItems,action.payload]
            }
        },
        editList: (state, action) => {
            return {
                ...state,
                listNameByIndex : state.listItems.at(action.payload),
                listIndex : action.payload
            }
        },
        updateListByIndex: (state, action) => {
            state.listItems[state.listIndex] = action.payload;
            state.listNameByIndex = '';
        },
        deleteList: () => {

        }
    }
})

export const { addList, editList, updateListByIndex, deleteList } = todoListSlice.actions;
export default todoListSlice.reducer;