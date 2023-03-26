import { Outlet } from 'react-router-dom';

import { Book } from 'entities/book';
import { useLayout } from '../model';
import { findCurrentGenre } from '../lib';

import styles from './layout-book-page.module.css';

export const Layout = () => {
  const { currentBook, bookId, pathname, allGenres } = useLayout();

  const genre = findCurrentGenre(allGenres, pathname);

  // кусок ненужного кода: начало. Тесты получают response массив всех книг по запросу за конкретной книгой (/books/127)
  const bookFromTestResponse = Array.isArray(currentBook) && currentBook.find((item) => item.id === +bookId);

  const book = bookFromTestResponse ? bookFromTestResponse : currentBook;
  // кусок ненужного кода: конец

  return (
    <main className={styles.bookPage}>
      <Book.ShortNavigation genre={genre} title={book.title} />
      <div className={styles.bookInfoWrapper}>
        <Outlet />
      </div>
    </main>
  );
};
