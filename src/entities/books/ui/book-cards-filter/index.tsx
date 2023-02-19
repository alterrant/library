import { FILTER_TEXT } from '../../lib';
import { Button } from '../../../../shared/ui';
import { ReactComponent as FilterDirection } from './assets/filter-sort.svg';

import styles from './filter.module.css';

export const Filter = () => (
    <Button
        buttonText={FILTER_TEXT}
        classButton={styles.filterCardsWrapper}
        classText={styles.filterCardsText}
    >
        <FilterDirection className={styles.svg}/>
    </Button>
);
