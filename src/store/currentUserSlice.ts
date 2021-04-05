/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookModel } from "../model/BookModel";
import { UserModel } from '../model/UserModel';

export interface CurrentUserState {
    currentUser:UserModel|null;
    
}

const initialState: CurrentUserState = {
    currentUser: null,
};

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addCurrentUser: (state,action:PayloadAction<UserModel>) => {
        state.currentUser=action.payload;
      },
        removeCurrentUser: (state) => {
          state.currentUser=null;  
      },
    },
  
  });
  
  export const { addCurrentUser, removeCurrentUser } = currentUserSlice.actions;
  
  
  
  export default currentUserSlice.reducer;