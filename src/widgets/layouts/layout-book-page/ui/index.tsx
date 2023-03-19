import { Outlet, useParams } from 'react-router-dom';

import { Book, BookModel } from '../../../../entities/book';
import { NavListModel } from '../../../../entities/nav-lists';
import { useAppSelector, useFetch } from '../../../../shared/lib';
import { SuccessMessages } from '../../../../features/book-interactions/lib';
import { BookInteractionsModel } from '../../../../features/book-interactions';

import styles from './layout-book-page.module.css';

export const Layout = () => {
  const allGenres = useAppSelector(NavListModel.allGenresSelector);
  const { book } = useAppSelector(BookModel.bookSelector);
  const { successMessage } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);

  const pathname = useParams() as { genres: string; id: string };
  const genre = allGenres.find((genre) => genre.path === pathname.genres);
  // const isCached = book.id === +pathname.id;
  useFetch(
    BookModel.getBook(pathname.id),
    false,
    pathname.id,
    successMessage === SuccessMessages.ADD_COMMENT
  );

  return (
    <main className={styles.bookPage}>
      <Book.ShortNavigation genre={genre} title={book.title} />
      <Outlet />
    </main>
  );
};
