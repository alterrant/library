import { createSlice } from '@reduxjs/toolkit';
import { UpdateBookingActionType } from 'shared/lib';

import {
  initialState,
  SetBooksErrorActionType,
  SetBooksActionType,
} from '../lib';

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks: (state) => {
      state.isLoading = true;
      state.error = '';
      state.books = [];
    },
    setBooks: (state, { payload }: SetBooksActionType) => {
      state.isLoading = false;
      state.books = payload;
    },
    updateBooking: (state, { payload }: UpdateBookingActionType) => {
      const book = state.books.find((book) => book.id === payload.id);

      if (book) book.booking = payload.booking;
    },
    setBooksError: (state, { payload }: SetBooksErrorActionType) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetBooks: (state) => {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.books = initialState.books;
    },
  },
});

export const { getBooks, setBooks, setBooksError, updateBooking, resetBooks } = slice.actions;
export const { reducer } = slice;
