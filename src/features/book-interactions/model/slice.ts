import { createSlice } from '@reduxjs/toolkit';

import {
  initialState,
  BookingPayloadType,
  ChangeBookingDatePayloadType,
  CancelBookingPayloadType,
  AddCommentPayloadType,
  ChangeCommentPayloadType,
  SetErrorPayloadType,
  SetSuccessPayloadType,
} from '../lib';

const slice = createSlice({
  name: 'bookInteractions',
  initialState,
  reducers: {
    setSuccess: (state, { payload }: SetSuccessPayloadType) => {
      state.isLoading = false;
      state.successMessage = payload;
      state.errorMessage = '';
    },
    booking: (state, action: BookingPayloadType) => {
      state.isLoading = true;
      state.successMessage = '';
      state.errorMessage = '';
    },
    changeBookingDate: (state, action: ChangeBookingDatePayloadType) => {
      state.isLoading = true;
      state.successMessage = '';
      state.errorMessage = '';
    },
    cancelBooking: (state, action: CancelBookingPayloadType) => {
      state.isLoading = true;
      state.successMessage = '';
      state.errorMessage = '';
    },
    addComment: (state, action: AddCommentPayloadType) => {
      state.isLoading = true;
      state.successMessage = '';
      state.errorMessage = '';
    },
    changeComment: (state, action: ChangeCommentPayloadType) => {
      state.isLoading = true;
      state.successMessage = '';
      state.errorMessage = '';
    },
    setError: (state, { payload }: SetErrorPayloadType) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
    resetState: (state) => {
      state.isLoading = false;
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
});

export const {
  setSuccess,
  booking,
  changeBookingDate,
  cancelBooking,
  addComment,
  changeComment,
  setError,
  resetState,
} = slice.actions;
export const { reducer } = slice;
