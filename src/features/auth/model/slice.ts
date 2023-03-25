import { createSlice } from '@reduxjs/toolkit';

import {
  AuthorisationActionType,
  ForgotPassAttemptActionType,
  initialState,
  RegistrationActionType,
  ResetPassAttemptActionType,
  SetErrorActionType,
} from '../lib';

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.errorMessage = '';
    },
    authorisation: (state, action: AuthorisationActionType) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.errorMessage = '';
    },
    registration: (state, action: RegistrationActionType) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.errorMessage = '';
    },
    forgotPassAttempt: (state, action: ForgotPassAttemptActionType) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.errorMessage = '';
    },
    resetPassAttempt: (state, action: ResetPassAttemptActionType) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.errorMessage = '';
    },
    setError: (state, { payload }: SetErrorActionType) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
    resetState: (state) => {
      state.isLoading = initialState.isLoading;
      state.isSuccess = initialState.isSuccess;
      state.errorMessage = initialState.errorMessage;
    },
  },
});

export const { setSuccess, authorisation, registration, forgotPassAttempt, resetPassAttempt, setError, resetState } =
  slice.actions;
export const { reducer } = slice;
