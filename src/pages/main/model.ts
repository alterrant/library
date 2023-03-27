import { useEffect, useState } from 'react';

import { BookInteractionsModel } from 'features/book-interactions';
import { toggleCardsStyleModel } from 'features/toggle-cards-style';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { CARD_STYLES, Nullable, useAppDispatch, useAppSelector } from 'shared/lib';

export const useMainPage = (token: Nullable<string>) => {
  const [style, toggleStyle] = toggleCardsStyleModel.useToggleCardsState(CARD_STYLES.COLUMN);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const dispatch = useAppDispatch();

  const { isLoading: isNavLoading } = useAppSelector(NavListModel.genresSelector);
  const { isLoading: isBookInteractiveLoading } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { isLoading: isBooksLoading } = useAppSelector(BooksModel.booksSelector);
  const isLoading = isNavLoading || isBookInteractiveLoading || isBooksLoading;

  useEffect(() => {
    if (token && useEffectState.isFirstEffect) dispatch(BooksModel.getBooks());

    return () => setUseEffectState({ isFirstEffect: true });
  }, [useEffectState.isFirstEffect]);

  return {
    style,
    toggleStyle,
    isLoading,
  };
};
