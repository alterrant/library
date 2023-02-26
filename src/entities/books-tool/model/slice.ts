import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, FilterStringType } from '../lib';

const slice = createSlice({
    name: 'books-tool',
    initialState,
    reducers: {
        toggleRatingSort: (state) => {
            state.isDescendingRating = !state.isDescendingRating;
        },
        setFilterString: (state, action: PayloadAction<FilterStringType>) => {
            state.filterString = action.payload;
        },
    }
});

export const { toggleRatingSort, setFilterString } = slice.actions;
export const { reducer } = slice;
