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
  <article className={styles.bookReviewWrapper}>
    <div className={styles.reviewer}>
      <RoundImage>
        <Img alt='reviewerAva' url={avatarUrl} defaultSrc={defaultAvatar} />
      </RoundImage>
      <p className={styles.author}>{name}</p>
      <p>{date}</p>
    </div>
    <Stars rating={rating ?? 0} />
    {description && (
      <p className={styles.description}>
        {description}
      </p>
    )}
  </article>
);
