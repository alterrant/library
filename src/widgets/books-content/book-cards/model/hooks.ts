import { useParams } from 'react-router-dom';

import { BooksToolModel } from 'entities/books-tool';
import { useAppSelector } from 'shared/lib';
import { booksWithGenresSelector } from './selectors';

export const useBooksCardsWrapper = () => {
  const { booksByGenres } = useAppSelector(booksWithGenresSelector);
  const { isDescendingRating, filterString } = useAppSelector(BooksToolModel.booksToolSelector);

  const currentGenre = useParams().genres!;

  return {
    booksByGenres,
    isDescendingRating,
    filterString,
    currentGenre,
  };
};
