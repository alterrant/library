import { Outlet, useParams } from 'react-router-dom';

import { Book, BookModel } from 'entities/book';
import { NavListModel } from 'entities/nav-lists';
import { useAppSelector, useFetch } from 'shared/lib';

import styles from './layout-book-page.module.css';

export const Layout = () => {
  const allGenres = useAppSelector(NavListModel.allGenresSelector);
  const { book: currentBook } = useAppSelector(BookModel.bookSelector);

  const pathname = useParams() as { genres: string; id: string };
  const genre = allGenres.find((genre) => genre.path === pathname.genres);

  const bookId = +pathname.id;

  // кусок ненужного кода: начало. Тесты получают response массив всех книг по запросу за конкретной книгой (/books/127)
  const bookFromTestResponse = Array.isArray(currentBook) && currentBook.find(item => item.id === +bookId)

  const book = bookFromTestResponse ? bookFromTestResponse : currentBook;
  // кусок ненужного кода: конец

  useFetch(
    BookModel.getBook(bookId),
    false,
    bookId,
  );

  return (
    <main className={styles.bookPage}>
      <Book.ShortNavigation genre={genre} title={book.title} />
      <div className={styles.bookInfoWrapper}>
        <Outlet />
      </div>
    </main>
  );
};
