import { BooksConfig } from 'entities/books';

export const getOneGenreBooks = (booksByGenres: BooksConfig.BooksByGenresTypes, genre: string) => {
  const genreWithBooks = booksByGenres.find((oneGenreBooks) => oneGenreBooks.genre === genre);

  return genreWithBooks?.genreFilteredBooks ?? [];
};
