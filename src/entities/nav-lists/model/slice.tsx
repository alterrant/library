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
    setGenres: (state, { payload }: PayloadAction<GenreType[]>) => {
      state.isLoading = false;
      state.genres = payload;
    },
    setGenresError: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getGenres, setGenres, setGenresError } = slice.actions;
export const { reducer } = slice;
