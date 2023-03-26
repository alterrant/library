import { getMatches } from 'shared/lib';
import { FilterStringType, IsDescendingRatingType } from './types';
import { BooksTypes } from '../../books';

export const filterByString = (books: BooksTypes, filterString: FilterStringType) => {
  if (filterString) return books?.filter((book) => getMatches(book.title, filterString));

  return books;
};

export const sortByRating = (books: BooksTypes, isDescendingRating: IsDescendingRatingType) =>
  [...books].sort((prevBook, nextBook) => {
    const result = prevBook.rating - nextBook.rating;

    return isDescendingRating ? result : result * -1;
  });
