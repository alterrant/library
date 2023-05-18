import { useState } from 'react';

import { initialBooksCounterState, BookCounterStateType } from '../lib';

export const useLoadMoreBooks = () => {
  const [booksCounterState, setBooksCounterState] = useState<BookCounterStateType>(initialBooksCounterState);

  return {
    booksCounterState,
    setBooksCounterState
  };
};
