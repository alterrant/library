import { CenteredTemplate } from 'shared/ui';
import { BookCards } from './book-сards';
import { useBooksCardsWrapper } from '../model/hooks';
import { BookCardsWrapperProps, BOOKS, getFilters, getOneGenreBooks, getCardsClassName } from '../lib';

export const BookCardsWrapper = ({ cardsStyle }: BookCardsWrapperProps) => {
  const { booksByGenres, currentGenre, filterString, isDescendingRating } = useBooksCardsWrapper();

  const cardsClassName = getCardsClassName(cardsStyle);

  const books = getOneGenreBooks(booksByGenres, currentGenre);
  const filteredBooks = getFilters(isDescendingRating, filterString)(books);

  const isBooks = books.length;
  const isFilters = filteredBooks.length;

  if (!isBooks) return <CenteredTemplate dataTestId='empty-category'>{BOOKS.EMPTY_CATEGORY}</CenteredTemplate>;

  if (!isFilters)
    return <CenteredTemplate dataTestId='search-result-not-found'>{BOOKS.EMPTY_QUERY_RESULT}</CenteredTemplate>;

  return (
    <section className={cardsClassName} data-test-id='content'>
      <BookCards
        cardsStyle={cardsStyle}
        filteredBooks={filteredBooks}
        filterString={filterString}
        currentGenre={currentGenre}
      />
    </section>
  );
};
