import compose from "compose-function";

import { BooksByGenresTypes, BooksTypes } from '../../../entities/books';
import {
    FilterStringType,
    IsDescendingRatingType,
    filterByString,
    sortByRating
} from "../../../entities/books-tool";

export const getOneGenreBooks = (booksByGenres: BooksByGenresTypes, genre: string) => {
    const genreWithBooks = booksByGenres.find(oneGenreBooks => oneGenreBooks.genre === genre);

    return genreWithBooks?.genreFilteredBooks ?? [];
};

type GetFiltersReturnType = (books: BooksTypes) => BooksTypes;

export const getFilters = (
    isDescendingRating: IsDescendingRatingType,
    filterString: FilterStringType
): GetFiltersReturnType =>
    compose(
        (books) => sortByRating(books, isDescendingRating),
        (books: BooksTypes) => filterByString(books, filterString),
);
