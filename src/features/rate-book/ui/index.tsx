import { RATE_BOOK_TEXT } from '../config';
import { Button } from '../../../shared/ui';

import styles from './rate-book.module.css';

type RateBookProps = {
  setModalStatus: () => void;
};

export const RateBook = ({ setModalStatus }: RateBookProps) => (
  <Button
    dataTestId='button-rate-book'
    classButton={styles.button}
    buttonText={RATE_BOOK_TEXT}
    classText={styles.buttonText}
    onClick={setModalStatus}
  />
);
