import classNames from "classnames";

import { BOOKS } from '../../entities/books/lib';
import { Books } from '../../entities/books';
import { CARD_STYLES, CardStylesTypes } from '../../shared/lib';
import { AddToCart } from '../../features/add-to-cart';

import styles from './book-cards.module.css';

type BookCardsProps = {
    cardsStyle: CardStylesTypes;
};

export const BookCards = ({ cardsStyle }: BookCardsProps) => {
    const cardsClassName = classNames(styles.container, cardsStyle === CARD_STYLES.COLUMN && styles.columnCardsStyle);

    const bookCards = BOOKS.map(bookCard => (
        <Books.BookCard
            key={bookCard.id}
            cardsStyle={cardsStyle}
            id={bookCard.id}
            img={bookCard.img[0]}
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
