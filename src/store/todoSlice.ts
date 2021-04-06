/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ToDoItemModel } from '../model/ToDoItemModel';


export interface TodoState {
    todos:ToDoItemModel[];
    currentId: number;
}

const initialState: TodoState = {
    todos: [],
    currentId: 0,
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state,action:PayloadAction<string>) => {
      state.todos=[...state.todos,{id:state.currentId,task:action.payload,isDone:false}]
      state.currentId=state.currentId+1
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

export const selectTodos= (state: RootState) => state.todo.todos

export default todoSlice.reducer;
