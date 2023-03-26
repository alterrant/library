import { BooksStateTypes, BooksTypes } from '../config';

export const booksSelector = (state: RootState): BooksStateTypes => state.books;

export const allBooksSelector = (state: RootState): BooksTypes => state.books.books;
