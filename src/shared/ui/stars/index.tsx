import { ReactNode } from 'react';

import { ReactComponent as Star } from '../assets/star.svg';
import { MAX_RATING } from '../../config';

import styles from './stars.module.css';

type StarsProps = {
    rating: number | null;
};

export const Stars = ({ rating }: StarsProps) => {
        const stars: ReactNode[] = Array.from(Array(MAX_RATING).keys())
            .map((star, index) => {
                const key = star + index;

                if (rating !== null && index + 1 <= rating ) return (
                    <Star key={key} fill='rgba(255, 188, 31, 1)'/>
                )

                return <Star key={key} />
        });

        return (
            <div className={styles.starsWrapper}>
                {stars}
            </div>
        )
};
