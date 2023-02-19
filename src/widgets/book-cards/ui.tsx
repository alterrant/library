import classNames from "classnames";
import { useParams } from "react-router-dom";

import { AddToCart, timeFormatOptions } from '../../features/add-to-cart';
import { Books, BooksTypes, getBookGenre } from '../../entities/books';
import { CARD_STYLES, CardStylesTypes, getDate } from '../../shared/lib';

import styles from './book-cards.module.css';
// TODO: добавить логику брони
type BookCardsProps = {
    cardsStyle: CardStylesTypes;
    books: BooksTypes;
};

export const BookCards = ({ cardsStyle, books }: BookCardsProps) => {
    const cardsClassName = classNames(
        styles.container,
        cardsStyle === CARD_STYLES.COLUMN && styles.columnCardsStyle
    );
    const currentGenre = useParams()?.genres;

    const bookCards = books.map(bookCard => (
        <Books.BookCard
            key={bookCard.id}
            cardsStyle={cardsStyle}
            id={bookCard.id}
            img={bookCard.image}
            alt={bookCard.title}
            rating={bookCard.rating}
            title={bookCard.title}
            authors={bookCard.authors}
            genres={getBookGenre(bookCard.categories, currentGenre)}
            cardButton={(
                <AddToCart
                    bookStatus={bookCard.booking?.order ? 'reserved' : 'available'}
                    buttonText={bookCard.booking?.order ?
                        `занята до ${getDate(bookCard.booking?.dateOrder, timeFormatOptions)}`
                        :
                        'забронировать'}
                />
            )}
        />
    )
);

    return (
        <section className={cardsClassName}>
            {bookCards}
        </section>
    )
};
