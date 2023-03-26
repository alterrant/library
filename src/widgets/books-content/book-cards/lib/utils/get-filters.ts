import compose from 'compose-function';

import { BooksConfig } from 'entities/books';
import {
  filterByString,
  FilterStringType,
  IsDescendingRatingType,
  sortByRating,
} from '../../../../../entities/books-tool';

type GetFiltersReturnType = (books: BooksConfig.BooksTypes) => BooksConfig.BooksTypes;

export const getFilters = (
  isDescendingRating: IsDescendingRatingType,
  filterString: FilterStringType
): GetFiltersReturnType =>
  compose(
    (books) => sortByRating(books, isDescendingRating),
    (books: BooksConfig.BooksTypes) => filterByString(books, filterString)
  );
