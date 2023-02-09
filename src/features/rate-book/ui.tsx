import { RATE_BOOK_TEXT } from './config';
import { Button } from '../../shared/ui';

import styles from './rate-book.module.css';

type RateBookProps = {
    handleClick: () => void;
};

export const RateBook = ({handleClick}: RateBookProps) => (
// TODO: проверить cardButtonText, не слетело ли чего, когда удалял cardButtonText из Button.module.css
    <Button
        dataTestId='button-rating'
        classButton={styles.cardButton}
        buttonText={RATE_BOOK_TEXT}
        classText={styles.cardButtonText}
        onClick={handleClick}/>
);
