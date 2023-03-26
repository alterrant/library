import { ReactNode } from 'react';

import { Underline } from 'shared/ui';
import { BookBasicInfoType } from '../../lib';

import styles from './basik-book-info.module.css';

type BookInfoProps = BookBasicInfoType & {
  button: ReactNode;
  imagesContainer: ReactNode;
};

export const BookInfo = ({
  imagesContainer,
  title,
  authors,
  button,
  description,
}: BookInfoProps) => (
  <div className={styles.basicBookInfo}>
    {imagesContainer}
    <p data-test-id='book-title' className={styles.title}>
      {title}
    </p>
    <p className={styles.authors}>{authors?.join(', ')}</p>
    {button}
    <p className={styles.descriptionTitle}>О книге</p>
    <Underline underlineClass={styles.underline} />
    <div className={styles.description}>
      <p>{description}</p>
    </div>
  </div>
);
