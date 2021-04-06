/*
** slice是toolkit的概念，他是把 Redux 原生的state、reducer、action都合在一包，並且叫它slice。
*/
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

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
            state.loading = false;
        },
    },

});

export const { startLoading, stopLoading } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading.loading

export default loadingSlice.reducer;