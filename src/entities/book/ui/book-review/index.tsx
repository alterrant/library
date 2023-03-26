import { defaultAvatar, Img, RoundImage, Stars } from 'shared/ui';

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
      <RoundImage>
        <Img alt='reviewerAva' url={avatarUrl} defaultSrc={defaultAvatar} />
      </RoundImage>
      <p data-test-id='comment-author' className={styles.author}>{name}</p>
      <p data-test-id='comment-date'>{date}</p>
    </div>
    <Stars rating={rating ?? 0} />
    {description && (
      <p data-test-id='comment-text' className={styles.description}>
        {description}
      </p>
    )}
  </article>
);
