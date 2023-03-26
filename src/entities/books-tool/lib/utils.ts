import { getMatches } from 'shared/lib';
import { FilterStringType, IsDescendingRatingType } from './types';
import { BooksConfig } from '../../books';

export const filterByString = (books: BooksConfig.BooksTypes, filterString: FilterStringType) => {
  if (filterString) return books?.filter((book) => getMatches(book.title, filterString));

  return books;
};

export const sortByRating = (books: BooksConfig.BooksTypes, isDescendingRating: IsDescendingRatingType) =>
  [...books].sort((prevBook, nextBook) => {
    const result = prevBook.rating - nextBook.rating;

    return isDescendingRating ? result : result * -1;
  });
