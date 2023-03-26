import { useAppSelector, useFetch } from '../../../../shared/lib';
import { useParams } from 'react-router-dom';
import { NavListModel } from 'entities/nav-lists';
import { BookModel } from 'entities/book';

export const useLayout = () => {
  const allGenres = useAppSelector(NavListModel.allGenresSelector);
  const { book: currentBook } = useAppSelector(BookModel.bookSelector);

  const pathname = useParams() as { genres: string; id: string };
  const bookId = +pathname.id;

  useFetch(BookModel.getBook(bookId), false, bookId);

  return {
    allGenres,
    currentBook,
    pathname,
    bookId,
  };
};
