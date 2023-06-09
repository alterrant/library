import { Button } from 'shared/ui';
import { useAppSelector } from 'shared/lib';
import { booksToolSelector } from '../../model';
import { FILTER_TEXT } from '../../lib';
import { ReactComponent as Descending } from './assets/descending.svg';
import { ReactComponent as Ascending } from './assets/ascending.svg';

import styles from './filter.module.css';

type SortProps = {
  clickHandler: () => void;
};

export const Sort = ({ clickHandler }: SortProps) => {
  const { isDescendingRating } = useAppSelector(booksToolSelector);

  return (
    <Button
      onClick={clickHandler}
      buttonText={FILTER_TEXT}
      classButton={styles.filterCardsWrapper}
      classText={styles.filterCardsText}
      isWrappedButtonText
    >
      <div className={styles.svg}>{isDescendingRating ? <Descending /> : <Ascending />}</div>
    </Button>
  );
};
