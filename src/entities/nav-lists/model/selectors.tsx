import { GenresStateTypes, GenreType } from '../lib';

export const genresSelector = (state: RootState): GenresStateTypes => state.bookGenres;

export const allGenresSelector = (state: RootState): GenreType[] => state.bookGenres.genres;
