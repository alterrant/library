import { Stars } from 'shared/ui';
import { EMPTY_RATING, Nullable } from 'shared/lib';

type BookCardRatingProps = {
  rating: Nullable<number>;
  bookRatingText: string;
};

export const BookCardRating = ({ rating, bookRatingText }: BookCardRatingProps) =>
  rating ? <Stars rating={rating} /> : <p className={bookRatingText}>{EMPTY_RATING}</p>;
