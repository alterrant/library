import { createSelector } from '@reduxjs/toolkit';

import { NavListModel, CountedGenreType } from 'entities/nav-lists';
import { BooksModel, BooksByGenresTypes } from 'entities/books';

export const booksWithGenresSelector = createSelector(
  [BooksModel.allBooksSelector, NavListModel.allGenresSelector],
  (books, genres) => {
    const booksByGenres: BooksByGenresTypes = [{ genre: 'all', genreFilteredBooks: books }];
    const countedGenres: CountedGenreType[] = [];

    genres.forEach((genre) => {
      const genreFilteredBooks = books.filter((book) => book.categories.includes(genre.name));

      booksByGenres.push({
        genre: genre.path,
        genreFilteredBooks,
      });

      countedGenres.push({
        ...genre,
        count: books.length ? genreFilteredBooks.length : null,
      });
    });

    return { booksByGenres, countedGenres };
  }
);
