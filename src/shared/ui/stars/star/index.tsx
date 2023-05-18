import { ReactComponent as Star } from '../../assets/star.svg';

import styles from '../stars.module.css';

type StarListProps = {
  color?: string | null;
  clickHandler: () => void;
};

export const StarList = ({ color = 'none', clickHandler }: StarListProps) => (
  <li className={styles.starWrapper} onClick={clickHandler}>
    <Star className={styles.star} fill={color} />
  </li>
);
