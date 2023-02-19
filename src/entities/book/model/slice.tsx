import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {BookInfoTypes, initialState} from '../lib';

const slice = createSlice({
    name: 'bookInfo',
    initialState,
    reducers: {
        getBook: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.error = '';
            state.book = {} as BookInfoTypes;
        },
        setBook: (state, action: PayloadAction<BookInfoTypes>) => {
            state.isLoading = false;
            state.book = action.payload;
        },
        setBookError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getBook, setBook, setBookError } = slice.actions;
export const { reducer } = slice;
