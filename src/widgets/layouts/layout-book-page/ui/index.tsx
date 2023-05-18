import { Outlet } from 'react-router-dom';

import { Book } from 'entities/book';
import { useLayoutTest } from '../model';
import { findCurrentGenre } from '../lib';

import styles from './layout-book-page.module.css';

export const Layout = () => {
  const { currentBook, pathname, allGenres } = useLayoutTest();

  const genre = findCurrentGenre(allGenres, pathname);

  return (
    <main className={styles.bookPage}>
      <Book.ShortNavigation genre={genre} title={currentBook.title} />
      <div className={styles.bookInfoWrapper}>
        <Outlet />
      </div>
    </main>
  );
};
