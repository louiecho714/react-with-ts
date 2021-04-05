import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import bookReducer from './bookSlice';
import loadingReducer from './loadingSlice';
import currentUserReducer from './currentUserSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    book: bookReducer,
    loading: loadingReducer,
    currentUser: currentUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>