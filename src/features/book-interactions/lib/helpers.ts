import { BookModel } from 'entities/book';
import { BooksModel } from 'entities/books';
import { UserModel } from 'entities/user';

export const modelsHelper = () => {
  const { getBooks } = BooksModel;
  const { getBook } = BookModel;
  const { me } = UserModel;

  return {
    getBooks,
    getBook,
    me
  };
};
