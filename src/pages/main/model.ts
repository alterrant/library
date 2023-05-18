import { useEffect, useState } from 'react';

import { LayoutModel } from 'widgets/layouts/layout';
import { toggleCardsStyleModel } from 'features/toggle-cards-style';
import { LoadMoreBooksModel } from 'features/load-more-books';
import { BooksModel } from 'entities/books';
import { CARD_STYLES, Nullable, useAppDispatch, useAppSelector } from 'shared/lib';

export const useMainPage = (token: Nullable<string>) => {
  const [style, toggleStyle] = toggleCardsStyleModel.useToggleCardsState(CARD_STYLES.COLUMN);

  const { booksCounterState, setBooksCounterState } = LoadMoreBooksModel.useLoadMoreBooks();
  const loadMoreBooksHandler = LoadMoreBooksModel.loadMoreBooksHandler(booksCounterState, setBooksCounterState);

  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });
  const [LoadMoreBooksState, setLoadMoreBooksState] = useState({ isVisible: true });

  const isLoading = useAppSelector(LayoutModel.loadingsSelector);
  const isError = useAppSelector(LayoutModel.errorsSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && useEffectState.isFirstEffect) dispatch(BooksModel.getBooks());

    return () => setUseEffectState({ isFirstEffect: true });
  }, [useEffectState.isFirstEffect]);

  return {
    style,
    toggleStyle,
    isLoading,
    isError,
    loadMoreBooksHandler,
    numberOfVisibleBooks: booksCounterState.numberOfVisibleBooks,
    LoadMoreBooksState,
    setLoadMoreBooksState
  };
};
