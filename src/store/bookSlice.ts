/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookModel } from "../model/BookModel";

export interface BookState {
    books:BookModel[];
    
}

const initialState: BookState = {
    books: [],
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addAllBooks: (state,action:PayloadAction<BookModel[]>) => {
        state.books=[...action.payload]
      },
        deleteAllBooks: (state) => {
          state.books=[]   
      },
    },
  
  });
  
  export const { addAllBooks, deleteAllBooks } = bookSlice.actions;
  
  
  
  export default bookSlice.reducer;