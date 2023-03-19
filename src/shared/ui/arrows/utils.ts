import classNames from 'classnames';

import { ORIENTATION } from '../../lib';

import styles from './arrow.module.css';

export const getClassName = (orientation: ORIENTATION, isColored: boolean, className?: string) =>
  classNames(styles.arrow, isColored && styles.colored, styles[orientation], className);
