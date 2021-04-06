/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookModel } from "../model/BookModel";
import { getBookList } from '../service/RestApi';
import { startLoading, stopLoading } from './loadingSlice';
import { AppThunk, RootState } from './store';

export interface BookState {
  books: BookModel[];

}

const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addAllBooks: (state, action: PayloadAction<BookModel[]>) => {
      state.books = [...action.payload]
    },
    deleteAllBooks: (state) => {
      state.books = []
    },
  },

});

export const getBooks = (): AppThunk => (
  dispatch,
  getState
) => {
  dispatch(startLoading())
  getBookList()
  .then(res =>res.json())
  .then(
    (books) => {
      console.log(books)
      dispatch(addAllBooks(books))
    }).finally(() => {
      dispatch(stopLoading())
    })

};


export const { addAllBooks, deleteAllBooks } = bookSlice.actions;

export const selectBooks = (state: RootState) => state.book.books



export default bookSlice.reducer;