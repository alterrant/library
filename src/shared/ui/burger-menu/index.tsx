import classNames from 'classnames';

import styles from './burger-menu.module.css';

type BurgerMenuProps = {
  isOpen: boolean;
};

export const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  const burgerClassName = classNames(styles.wrapper, isOpen && styles.open);

  return (
    <div className={burgerClassName}>
      <span className={styles.top} />
      <span className={styles.middle} />
      <span className={styles.bottom} />
    </div>
  );
};
