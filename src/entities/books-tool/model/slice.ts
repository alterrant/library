import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, FilterStringType } from '../lib';

const slice = createSlice({
  name: 'books-tool',
  initialState,
  reducers: {
    toggleRatingSort: (state) => {
      state.isDescendingRating = !state.isDescendingRating;
    },
    setFilterString: (state, { payload }: PayloadAction<FilterStringType>) => {
      state.filterString = payload;
    },
    resetFilters: (state) => {
      state.isDescendingRating = initialState.isDescendingRating;
      state.filterString = initialState.filterString;
    },
  },
});

export const { toggleRatingSort, setFilterString, resetFilters } = slice.actions;
export const { reducer } = slice;
