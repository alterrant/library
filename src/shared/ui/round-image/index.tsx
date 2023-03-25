import { ReactNode } from 'react';

import styles from './round-image.module.css';

type RoundImageTypes = {
  children: ReactNode;
};

export const RoundImage = ({ children }: RoundImageTypes) => (
  <div className={styles.controlWidth}>
    <div className={styles.wrapper}>{children}</div>
  </div>
);
