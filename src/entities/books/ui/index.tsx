import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Stars, unsetBook } from '../../../shared/ui';
import { CARD_STYLES, EMPTY_RATING, CardStylesTypes, BASE_URL } from '../../../shared/lib';

import stylesColumnCard from './book-card-column.module.css';
import stylesRowCard from './book-card-row.module.css';

type BookCardProps = {
  cardsStyle: CardStylesTypes;
  id: number;
  alt: string;
  img: { url: string } | null;
  rating: number | null;
  title: ReactNode;
  authors: string[];
  genres: string;
  cardButton: ReactNode;
};

export const BookCard = ({
  cardsStyle,
  id,
  alt,
  img,
  rating,
  title,
  authors,
  genres,
  cardButton,
}: BookCardProps) => {
  const src = `${BASE_URL}${img?.url}`;
  const cardClassName = cardsStyle === CARD_STYLES.ROW ? stylesRowCard : stylesColumnCard;

  return (
    <NavLink to={`../${genres}/${id}`} relative='path' data-test-id='card'>
      <div className={cardClassName.bookWrapper}>
        <div className={cardClassName.bookImg}>
          <img src={img?.url ? src : unsetBook} alt={alt} />
        </div>
        {rating ? (
          <Stars rating={rating} />
        ) : (
          <p className={cardClassName.bookRatingText}>{EMPTY_RATING}</p>
        )}
        <p className={cardClassName.bookTitle}>{title}</p>
        <p className={cardClassName.bookAuthors}>{authors.join(', ')}</p>
        {cardButton}
      </div>
    </NavLink>
  );
};
