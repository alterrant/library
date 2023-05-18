import classNames from 'classnames';

import { Circle } from '..';

import styles from './preloader.module.css';

type PreloaderProps = {
  className?: string;
};

export const Preloader = ({ className }: PreloaderProps) => (
  <div className={classNames(styles.preloaderWrapper, className)}>
    <Circle className={styles.preloader} />
  </div>
);
