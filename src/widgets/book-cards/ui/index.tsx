import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { BookCards } from './book-сards';
import { booksWithGenresSelector } from '../model';
import { BookCardsWrapperProps, getFilters, getOneGenreBooks, BOOKS } from '../lib';
import { BooksToolModel } from '../../../entities/books-tool';
import { CARD_STYLES, useAppSelector } from '../../../shared/lib';
import { CenteredTemplate } from '../../../shared/ui';

import styles from './book-cards-wrapper.module.css';
// TODO: добавить логику брони
export const BookCardsWrapper = ({ cardsStyle }: BookCardsWrapperProps) => {
    const cardsClassName = classNames(
        styles.container,
        cardsStyle === CARD_STYLES.COLUMN && styles.columnCardsStyle
    );

    const { booksByGenres } = useAppSelector(booksWithGenresSelector);
    const { isDescendingRating, filterString } = useAppSelector(BooksToolModel.booksToolSelector);

    const currentGenre = useParams().genres!;
    const books = getOneGenreBooks(booksByGenres, currentGenre);
    const filteredBooks = getFilters(isDescendingRating, filterString)(books);

    if (!books.length) return (
        <CenteredTemplate dataTestId='empty-category'>
            {BOOKS.EMPTY_CATEGORY}
        </CenteredTemplate>
    );
    if (!filteredBooks.length) return (
        <CenteredTemplate dataTestId='search-result-not-found'>
            {BOOKS.EMPTY_QUERY_RESULT}
        </CenteredTemplate>
    );

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
