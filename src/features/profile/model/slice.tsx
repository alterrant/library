import { createSlice } from '@reduxjs/toolkit';

import { initialState, Types } from '../lib';
import { UploadAvatarTypes, ChangeUserInfoTypes } from '../lib/types';

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setSuccess: (state, { payload }: Types.SetSuccessPayloadType) => {
      state.isLoading = false;
      state.success = payload;
      state.error = '';
    },
    uploadAvatar: (state, { payload }: UploadAvatarTypes.UploadAvatarActionType) => {
      state.isLoading = true;
      state.success = '';
      state.error = '';
    },
    changeUserInfo: (state, { payload }: ChangeUserInfoTypes.ChangeUserInfoActionType) => {
      state.isLoading = true;
      state.success = '';
      state.error = '';
    },
    setError: (state, { payload }: Types.SetUserErrorActionType) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetState: (state) => {
      state.isLoading = initialState.isLoading;
      state.success = initialState.success;
      state.error = initialState.error;
    },
  },
});

export const { setSuccess, uploadAvatar, changeUserInfo, setError, resetState } = slice.actions;
export const { reducer } = slice;
