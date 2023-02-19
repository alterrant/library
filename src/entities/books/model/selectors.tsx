import { BooksStateTypes } from "../lib";

export const booksSelector = (state: RootState): BooksStateTypes => state.books;
