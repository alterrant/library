import { createSlice } from '@reduxjs/toolkit';
import { UpdateBookingActionType } from 'shared/lib';

import {
  BookInfoTypes,
  GetBookPayloadType,
  initialState,
  SetBookErrorPayloadType,
  SetBookPayloadType,
  UpdateCommentsPayloadType,
} from '../config';

const slice = createSlice({
  name: 'bookInfo',
  initialState,
  reducers: {
    getBook: (state, action: GetBookPayloadType) => {
      state.isLoading = true;
      state.error = '';
      state.book = {} as BookInfoTypes;
    },
    setBook: (state, { payload }: SetBookPayloadType) => {
      state.isLoading = false;
      state.book = payload;
    },
    sortReviews: (state) => {
      if (state.book.comments) state.book.comments = state.book.comments.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
    },
    updateComments: (state, { payload }: UpdateCommentsPayloadType) => {
      if (state.book.comments) state.book.comments.push(payload);
      else state.book.comments = [payload];
    },
    updateBooking: (state, { payload }: UpdateBookingActionType) => {
      state.book.booking = payload.booking;
    },
    setBookError: (state, { payload }: SetBookErrorPayloadType) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetState: (state) => {
      state.book = initialState.book;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
    },
  },
});

export const { getBook, setBook, updateComments, updateBooking, setBookError, sortReviews, resetState } = slice.actions;
export const { reducer } = slice;
