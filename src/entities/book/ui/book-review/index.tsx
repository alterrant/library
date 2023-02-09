import { defaultAvatar, Stars } from '../../../../shared/ui';

import styles from './book-review.module.css';

type ReviewProps = {
    image: string;
    name: string;
    date: string;
    rating: number | null;
    description: string;
};

export const Review = ({image, name, date, rating, description}: ReviewProps) => (
    <article className={styles.bookReviewWrapper}>
        <div className={styles.reviewer}>
            <img src={image ? image : defaultAvatar} alt="reviewerAva"/>
            <p>{name}</p>
            <p>{date}</p>
        </div>
        <Stars rating={rating} />
        {/* семантически важно p в description, но оставлять p при пустом description тоже нельзя */}
        {description && <p className={styles.description}>{description}</p>}
    </article>
);
