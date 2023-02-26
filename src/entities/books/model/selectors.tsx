import { BooksStateTypes, BooksTypes } from '../lib';

export const booksSelector = (state: RootState): BooksStateTypes => state.books;

export const allBooksSelector = (state: RootState): BooksTypes => state.books.books;
