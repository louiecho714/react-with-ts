/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoadingState {
    loading: boolean;
}

const initialState: LoadingState = {
    loading: false,
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = true;
        },
    },

});

export const { startLoading, stopLoading } = loadingSlice.actions;



export default loadingSlice.reducer;