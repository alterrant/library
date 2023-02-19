import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {initialState, BooksTypes} from "../lib";

const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getBooks: (state) => {
            state.isLoading = true;
            state.error = '';
            state.books = [];
        },
        setBooks: (state, action: PayloadAction<BooksTypes>) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        setBooksError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetBooks: state => {
            state.isLoading = false;
            state.error = '';
            state.books = [];
        }
    }
});

export const { getBooks, setBooks, setBooksError, resetBooks } = slice.actions;
export const { reducer } = slice;
