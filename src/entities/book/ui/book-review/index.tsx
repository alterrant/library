import { defaultAvatar, Stars } from '../../../../shared/ui';
import { getImageSrc } from '../../../../shared/lib';

import styles from './book-review.module.css';

type ReviewProps = {
  avatarUrl: string | null;
  name: string;
  date: string;
  rating: number | null;
  description: string | null;
};

export const Review = ({ avatarUrl, name, date, rating, description }: ReviewProps) => (
  <article data-test-id='comment-wrapper' className={styles.bookReviewWrapper}>
    <div className={styles.reviewer}>
      <img src={avatarUrl ? getImageSrc(avatarUrl) : defaultAvatar} alt='reviewerAva' />
      <p data-test-id='comment-author'>{name}</p>
      <p data-test-id='comment-date'>{date}</p>
    </div>
    <Stars rating={rating ?? 0} />
    {/* семантически важно p в description, но оставлять p при пустом description тоже нельзя */}
    {description && (
      <p data-test-id='comment-text' className={styles.description}>
        {description}
      </p>
    )}
  </article>
);
