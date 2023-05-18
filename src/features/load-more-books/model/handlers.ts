import { Dispatch } from 'react';

import { BookCounterStateType, booksStep } from '../lib';

export const loadMoreBooksHandler = (booksCounterState: BookCounterStateType, setBooksCounterState: Dispatch<BookCounterStateType>) =>
  () => {
    const changedNumberOfBooks = booksCounterState.numberOfVisibleBooks + booksStep;
    const changedBooksCounterState = { numberOfVisibleBooks: changedNumberOfBooks };

    setBooksCounterState(changedBooksCounterState);
};
