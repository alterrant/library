import { useEffect, useState } from 'react';
import { BookCardsTool } from 'widgets/books-content/book-cards-tool';
import { BookCards } from 'widgets/books-content/book-cards';
import { BookInteractionsModel } from 'features/book-interactions';
import { toggleCardsStyleModel } from 'features/toggle-cards-style';
import { UserModel } from 'entities/user';
import { NavListModel } from 'entities/nav-lists';
import { BooksModel } from 'entities/books';
import { Preloader } from 'shared/ui';
import { CARD_STYLES, TOKEN, useAppDispatch, useAppSelector } from 'shared/lib';

import styles from './main-page.module.css';

export const MainPage = () => {
  const [style, toggleStyle] = toggleCardsStyleModel.useToggleCardsState(CARD_STYLES.COLUMN);
  const [useEffectState, setUseEffectState] = useState({ isFirstEffect: false });

  const { isLoading: isUserLoading, error: userError } = useAppSelector(UserModel.userSelector);
  const { isLoading: isNavLoading, error: navError } = useAppSelector(NavListModel.genresSelector);
  const { isLoading: isBooksLoading, error: booksError } = useAppSelector(BooksModel.booksSelector);
  const { isLoading: isBookInteractiveLoading, errorMessage: bookInteractiveError, successMessage } =
    useAppSelector(BookInteractionsModel.bookInteractionsSelector);

  const isLoading = isNavLoading || isBookInteractiveLoading;
  const isError = navError || booksError || bookInteractiveError;

  // const isCached = !!books?.length;
  const dispatch = useAppDispatch();
  const token = localStorage.getItem(TOKEN);

  useEffect(() => {
    if (token && useEffectState.isFirstEffect) dispatch(BooksModel.getBooks());

    return () => setUseEffectState({ isFirstEffect: true });
  }, [useEffectState.isFirstEffect]);

  return (
    <>
      {
        (isLoading ? (
          <Preloader />
        ) : (
          <section className={styles.content}>
            <BookCardsTool cardsStyle={style} toggleStyle={toggleStyle} />
            <BookCards cardsStyle={style} />
          </section>
        ))}
    </>
  );
};
