import { ReactNode, SyntheticEvent, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { Img, TextWithHighlights, unsetBook } from 'shared/ui';
import { CARD_STYLES, CardStylesTypes } from 'shared/lib';
import { BookCardRating } from './book-card-rating';

import stylesColumnCard from './book-card-column.module.css';
import stylesRowCard from './book-card-row.module.css';

type BookCardProps = {
  cardsStyle: CardStylesTypes;
  id: number;
  alt: string;
  imgURL?: string | null;
  rating: number | null;
  title: string;
  authors: string[];
  genres?: string;
  filterString?: string;
  cardButton: ReactNode;
};

export const BookCard = ({
  cardsStyle,
  id,
  alt,
  imgURL,
  rating,
  title,
  authors,
  genres = 'books/all',
  filterString,
  cardButton,
}: BookCardProps) => {
  const cardClassName = cardsStyle === CARD_STYLES.ROW ? stylesRowCard : stylesColumnCard;

  const getHighlightTitle = useCallback(
    (title: string, filterString?: string) => (
      <TextWithHighlights isInputs={false} title={title} filter={filterString} />
    ),
    [filterString]
  );
  // stopPropagationOverButton чтобы любая кнока внутри BookCard не цепляла NavLink при всплытии
  const stopPropagationOverButton = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <NavLink to={`../${genres}/${id}`} relative='path'>
      <div className={cardClassName.bookWrapper}>
        <div className={cardClassName.bookImg}>
          <Img alt={alt} url={imgURL} defaultSrc={unsetBook} />
        </div>
        <BookCardRating rating={rating} bookRatingText={cardClassName.bookRatingText} />
        <p className={cardClassName.bookTitle}>{getHighlightTitle(title, filterString)}</p>
        <p className={cardClassName.bookAuthors}>{authors.join(', ')}</p>
        <div onClick={stopPropagationOverButton} className={cardClassName.buttonWrapper}>
          {cardButton}
        </div>
      </div>
    </NavLink>
  );
};
