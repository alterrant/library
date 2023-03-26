import { Stars, Underline } from 'shared/ui';
import { EMPTY_RATING } from 'shared/lib';
import { RATING_TITLE } from '../../lib';

import styles from './book-rating.module.css';

type BookRatingProps = {
  rating: number | null;
};

export const Rating = ({ rating }: BookRatingProps) => (
  <section>
    <p className={styles.title}>{RATING_TITLE}</p>
    <Underline underlineClass={styles.underline} />
    <div className={styles.ratingWrapper}>
      <Stars rating={rating ?? 0} />
      {rating ? <p className={styles.rating}>{rating}</p> : <p>{EMPTY_RATING}</p>}
    </div>
  </section>
);
