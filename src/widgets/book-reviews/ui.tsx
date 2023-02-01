import { REVIEWS, REVIEWS_TITLE } from './config';
import { BookReview } from '../../entities/book';
import { Underline } from '../../shared/ui';

import styles from './bookReviews.module.css';

export const BookReviews = () => (
    <section className={styles.bookReviews}>
        <p>{REVIEWS_TITLE}<span>{REVIEWS.length}</span></p>
        <Underline underlineClass={styles.underline} />
        <div className={styles.reviewsWrapper}>
            {REVIEWS.map(review => <BookReview
                key={review.id}
                rating={review.rating}
                description={review.description}
                name={review.name}
                date={review.date}
                image={review.image} />)}
        </div>
    </section>
);
