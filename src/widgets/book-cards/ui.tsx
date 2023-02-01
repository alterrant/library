import classNames from "classnames";

import { BOOKS } from './config';
import { BookCard } from '../../entities/book-card';
import { CARD_STYLES, CardStylesTypes } from '../../shared/config';
import { AddToCart } from '../../features/add-to-cart';

import styles from './book-cards.module.css';

type BookCardsProps = {
    cardsStyle: CardStylesTypes;
};

export const BookCards = ({ cardsStyle }: BookCardsProps) => {
    const cardsClassName = classNames(styles.container, cardsStyle === CARD_STYLES.COLUMN && styles.columnCardsStyle);
    const bookCards = BOOKS.map(bookCard => (
        <BookCard
            key={bookCard.id}
            cardsStyle={cardsStyle}
            id={bookCard.id}
            src={bookCard.img}
            rating={bookCard.rating}
            title={bookCard.title}
            authors={bookCard.author}
            genres={bookCard.genres}
            cardButton={<AddToCart
                bookStatus={bookCard.bookStatus}
                buttonText={bookCard.buttonText} />}
        />
    ));

    return (
        <section className={cardsClassName}>
            {bookCards}
        </section>
    )
};
