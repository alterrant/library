import { LoadMoreBooksLib } from 'features/load-more-books';
import { CenteredTemplate } from 'shared/ui';
import { BookCards } from './book-сards';
import { useBooksCardsWrapper } from '../model/hooks';
import { BookCardsWrapperProps, BOOKS, getFilters, getOneGenreBooks, getCardsClassName } from '../lib';
// TODO: заменить BookCards на BookCardsWrapper
export const BookCardsWrapper = ({ cardsStyle, numberOfVisibleBooks, setLoadMoreBooksState }: BookCardsWrapperProps & {setLoadMoreBooksState: any}) => {
  const {
    booksByGenres,
    currentGenre,
    filterString,
    isDescendingRating,
  } = useBooksCardsWrapper();

  const cardsClassName = getCardsClassName(cardsStyle);

  const books = getOneGenreBooks(booksByGenres, currentGenre);
  const filteredBooks = getFilters(numberOfVisibleBooks, isDescendingRating, filterString)(books);

  const isBooks = !!books.length;
  const isFilters = !!filteredBooks.length;
  // скрываем кнопку подгрузки книг, если подгрузить не получится
  if ((filteredBooks.length % LoadMoreBooksLib.initialNumberOfVisibleBooks) !== 0) setLoadMoreBooksState(false);
  else setLoadMoreBooksState(true);

  if (!isBooks) return <CenteredTemplate>{BOOKS.EMPTY_CATEGORY}</CenteredTemplate>;

  if (!isFilters)
    return <CenteredTemplate>{BOOKS.EMPTY_QUERY_RESULT}</CenteredTemplate>;

  return (
    <section className={cardsClassName}>
      <BookCards
        cardsStyle={cardsStyle}
        filteredBooks={filteredBooks}
        filterString={filterString}
        currentGenre={currentGenre}
      />
    </section>
  );
};
