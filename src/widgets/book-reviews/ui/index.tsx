import React from 'react';

import { RateBook } from 'features/book-interactions/ui/rate-book';
import { ToggleDropDown, ToggleDropDownModule } from 'features/toggle-drop-down';
import { Book, BookConfig } from 'entities/book';
import { getDate, getFullName, ORIENTATION } from 'shared/lib';
import { Arrows, Underline } from 'shared/ui';
import { isOpenReviewsInitial, REVIEWS_TITLE, timeFormatOptions } from '../config';

import styles from './book-reviews.module.css';

type BookReviewsProps = BookConfig.BookCommentsType & {
  bookId: number;
};

export const BookReviews = ({ comments, bookId }: BookReviewsProps) => {
  const [toggleStatus, setToggleStatus] = ToggleDropDownModule.useToggleState(isOpenReviewsInitial);
  const isComments = comments?.length;
  const arrowOrientation = toggleStatus.isOpen ? ORIENTATION.UP : ORIENTATION.DOWN;

  return (
    <section className={styles.bookReviews}>

      <ToggleDropDown
        handleClick={() => setToggleStatus({ isOpen: !toggleStatus.isOpen })}
        isMenuOpened={toggleStatus.isOpen}
        menuClass={styles.titleWrapper}
        hiddenElement={
          <>
            {isComments && <Underline underlineClass={styles.underline} />}
            <div className={styles.reviewsWrapper}>
              {comments?.map((review) => (
                <Book.Review
                  key={review.id}
                  rating={review.rating}
                  description={review.text}
                  name={getFullName(review.user?.firstName, review.user?.lastName)}
                  date={getDate(review.createdAt, timeFormatOptions)}
                  avatarUrl={review.user?.avatarUrl}
                />
              ))}
            </div>
          </>
        }
      >
        <div className={styles.title}>
          <p>
            {REVIEWS_TITLE}
            <span>{comments?.length}</span>
          </p>
          <Arrows.Arrow orientation={arrowOrientation} />
        </div>
      </ToggleDropDown>

      <div className={styles.rateWrapper}>
        <RateBook bookId={bookId} />
      </div>
    </section>
  );
};
