import { NavLink } from 'react-router-dom';

import { Arrows } from '..';
import { LinkedTextWithArrowType } from '../../lib';

import styles from './linked-text-with-arrow.module.css';

export const LinkedTextWithArrow = ({
  path,
  text,
  orientation,
  clickHandler,
}: LinkedTextWithArrowType) => (
  <NavLink to={`../${path}`} className={styles.link} onClick={clickHandler}>
    <p className={styles.linkText}>{text}</p>
    <Arrows.FootArrow orientation={orientation} />
  </NavLink>
);
