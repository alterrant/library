import { Circle } from '..';

import styles from './preloader.module.css';

export const Preloader = () => (
    <div data-test-id='loader' className={styles.preloaderWrapper}>
        <Circle className={styles.preloader} />
    </div>
);
