/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { ToDoItemModel } from '../model/ToDoItemModel';


export interface TodoState {
    todos:ToDoItemModel[];
}

const initialState: TodoState = {
    todos: [],
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state,action:PayloadAction<ToDoItemModel>) => {
      state.todos=[...state.todos,action.payload]
    },
    toggleTodo: (state,action:PayloadAction<number>) => {
        state.todos=state.todos.map(
            (toDoItem: ToDoItemModel) => (
                (toDoItem.id === action.payload)
                    ? { ...toDoItem, isDone: !toDoItem.isDone }
                    : toDoItem
            )
        )            
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteTodo: (state, action: PayloadAction<number>) => {
        state.todos=state.todos.filter(
            (el) => el.id !== action.payload
        )
    },
  },

});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;



export default todoSlice.reducer;
