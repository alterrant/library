import { createSlice } from '@reduxjs/toolkit';

import {
  ChangeUserInfoActionType,
  initialState,
  SetSuccessPayloadType,
  SetUserActionType,
  SetUserErrorActionType,
  UserType
} from '../lib';

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSuccess: (state, { payload }: SetSuccessPayloadType) => {
      state.isLoading = false;
      state.success = payload;
      state.error = '';
    },
    me: (state) => {
      state.isLoading = true;
      state.success = '';
      state.error = '';
      state.user = {} as UserType;
    },
    setUser: (state, { payload }: SetUserActionType) => {
      state.isLoading = false;
      state.user = payload;
    },
    setError: (state, { payload }: SetUserErrorActionType) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetState: (state) => {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.success = initialState.success;
      state.user = initialState.user;
    },
  },
});

export const { setSuccess, me, setUser, setError, resetState } = slice.actions;
export const { reducer } = slice;
