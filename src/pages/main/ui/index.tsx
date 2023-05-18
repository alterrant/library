import { BookCardsTool } from 'widgets/books-content/book-cards-tool';
import { BookCards } from 'widgets/books-content/book-cards';
import { LoadMoreBooks } from 'features/load-more-books';
import { Loader } from 'entities/loader';
import { TOKEN } from 'shared/lib';
import { useMainPage } from '../model';

import styles from './main-page.module.css';

export const MainPage = () => {
  const token = localStorage.getItem(TOKEN);

  const {
    isLoading,
    isError,
    toggleStyle,
    style,
    numberOfVisibleBooks,
    loadMoreBooksHandler,
    setLoadMoreBooksState,
    LoadMoreBooksState
  } = useMainPage(token);

  return (
    <Loader isLoading={isLoading} isError={isError}>
      <section className={styles.content}>
        <BookCardsTool cardsStyle={style} toggleStyle={toggleStyle} />
        <BookCards
          setLoadMoreBooksState={setLoadMoreBooksState}
          cardsStyle={style}
          numberOfVisibleBooks={numberOfVisibleBooks}
        />
        {LoadMoreBooksState && <LoadMoreBooks loadBooksHandler={loadMoreBooksHandler}/>}
     </section>
    </Loader>
  );
};
