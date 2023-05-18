import { forwardRef, ReactNode, RefObject } from 'react';

import { NavList, Underline } from 'shared/ui';
import { LOG_OUT, PROFILE } from '../config';

import styles from './drop-down-menu.module.css';

type DropDownMenuProps = {
  logOutHandler: () => void;
  isBurgerDropDown?: boolean;
  isUnderline?: boolean;
  dropDownMenuRef?: RefObject<HTMLUListElement>;
  children?: ReactNode;
};
// рефактор logOutHandler
export const DropDownMenu = forwardRef<HTMLUListElement, DropDownMenuProps>((
  {
    children,
    isUnderline,
    logOutHandler,
    dropDownMenuRef,
    isBurgerDropDown,
  }, ref) => (
    <ul ref={ref} className={styles.dropDownMenuWrapper}>
      {children}
      {isUnderline && <Underline/>}
      <ul className={styles.dropDownMenuFooter}>
        <NavList
          link={PROFILE.PATH}
          text={PROFILE.TITLE}
          textClass={styles.linkText}
          activeLinkClass={styles.activeLink}
        />
        <li
          className={styles.linkText}
          onClick={logOutHandler}
        >
          {LOG_OUT}
        </li>
      </ul>
    </ul>
  )
);
