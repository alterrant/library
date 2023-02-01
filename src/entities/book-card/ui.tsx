import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Stars, unsetBook } from '../../shared/ui';
import { CARD_STYLES, EMPTY_RATING, CardStylesTypes } from '../../shared/config';

import stylesColumnCard from './book-card-column.module.css';
import stylesRowCard from './book-card-row.module.css';

// TODO: убрать string из bookStatus в соответствии с ответом сервера
// TODO: BOOK_STATUS вынести из bookCard config
// TODO: переделать getCardInfo, когда подключу редакс
// TODO: удалить картинку книги из book-card

type BookCardProps = {
    cardsStyle: CardStylesTypes;
    id:string;
    src: string;
    rating: number | null;
    title: string;
    authors: string;
    genres: string;
    cardButton: ReactNode;
};

export const BookCard = ({
    cardsStyle,
    id,
    src,
    rating,
    title,
    authors,
    genres,
    cardButton,
}: BookCardProps) => {
    // TODO: getBookSrc заменить на селектор, когда будет json
    const getBookSrc = () => {
        if (src) return src;

        return unsetBook
    };

    const cardClassName = (cardsStyle === CARD_STYLES.ROW) ? stylesRowCard : stylesColumnCard;

    return (
        <NavLink to={`../${genres}/${id}`} relative='path' data-test-id='card'>
            <div className={cardClassName.bookWrapper}>
                <img className={cardClassName.bookImg} src={getBookSrc()} alt=""/>
                {rating ? (
                    <Stars rating={rating}/>
                ) : (
                    <p className={cardClassName.bookRatingText}>{EMPTY_RATING}</p>
                    )
                }
                <p className={cardClassName.bookTitle}>{title}</p>
                <p className={cardClassName.bookAuthors}>{authors}</p>
                {cardButton}
            </div>
        </NavLink>
    )
};
