import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, GenreType } from '../lib';

const slice = createSlice({
    name: 'bookGenres',
    initialState,
    reducers: {
        getGenres: (state) => {
            state.isLoading = true;
            state.error = '';
            state.genres = [];
        },
        setGenres: (state, action: PayloadAction<GenreType[]>) => {
            state.isLoading = false;
            state.genres = action.payload;
        },
        setGenresError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getGenres, setGenres, setGenresError } = slice.actions;
export const { reducer } = slice;
