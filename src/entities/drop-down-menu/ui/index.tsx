import { forwardRef, ReactNode, RefObject } from 'react';

import { LOG_OUT, PROFILE } from '../config';
import { NavList, Underline } from '../../../shared/ui';

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
          dataTestId={!isBurgerDropDown ? 'profile-button' : null}
          link={PROFILE.PATH}
          text={PROFILE.TITLE}
          textClass={styles.linkText}
          activeLinkClass={styles.activeLink}
        />
        <li
          className={styles.linkText}
          onClick={logOutHandler}
          data-test-id={isBurgerDropDown && 'exit-button'}
        >
          {LOG_OUT}
        </li>
      </ul>
    </ul>
  )
);
