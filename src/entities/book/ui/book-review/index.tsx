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

export const Review = ({avatarUrl, name, date, rating, description}: ReviewProps) => (
    <article className={styles.bookReviewWrapper}>
        <div className={styles.reviewer}>
            <img src={avatarUrl ? getImageSrc(avatarUrl) : defaultAvatar} alt="reviewerAva"/>
            <p>{name}</p>
            <p>{date}</p>
        </div>
        <Stars rating={rating} />
        {/* семантически важно p в description, но оставлять p при пустом description тоже нельзя */}
        {description && <p className={styles.description}>{description}</p>}
    </article>
);
