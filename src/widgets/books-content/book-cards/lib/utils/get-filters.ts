import compose from 'compose-function';

import { BooksConfig } from 'entities/books';
import {
  filterByString,
  FilterStringType,
  IsDescendingRatingType,
  sortByRating,
  restrictBooks
} from '../../../../../entities/books-tool';

type GetFiltersReturnType = (books: BooksConfig.BooksTypes) => BooksConfig.BooksTypes;

export const getFilters = (
  numberOfBooks: number,
  isDescendingRating: IsDescendingRatingType,
  filterString: FilterStringType
): GetFiltersReturnType =>
  compose(
    (books: BooksConfig.BooksTypes) => restrictBooks(books, numberOfBooks),
    (books) => sortByRating(books, isDescendingRating),
    (books: BooksConfig.BooksTypes) => filterByString(books, filterString)
  );
