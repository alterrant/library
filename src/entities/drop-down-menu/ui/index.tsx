import { forwardRef, ReactNode, RefObject } from 'react';

import { LOG_OUT, PROFILE } from '../config';
import { NavList, Underline } from '../../../shared/ui';

import styles from './drop-down-menu.module.css';

type DropDownMenuProps = {
    logOutHandler: () => void;
    forTest?: boolean;
    dropDownMenuRef: RefObject<HTMLUListElement>;
    children?: ReactNode;
};
// рефактор logOutHandler
export const DropDownMenu = forwardRef<HTMLUListElement, DropDownMenuProps>(
    (
        {
            children,
            logOutHandler,
            dropDownMenuRef,
            forTest
        }, ref) => (
        <ul ref={ref} className={styles.dropDownMenuWrapper}>
            {children}
            <Underline/>
            <div className={styles.dropDownMenuFooter}>
                <NavList
                    link={PROFILE.PATH}
                    text={PROFILE.TITLE}
                    textClass={styles.linkText}
                    activeLinkClass={styles.activeLink}
                />
                <li
                    className={styles.linkText}
                    onClick={logOutHandler}
                    data-test-id={forTest && 'exit-button'}>
                    {LOG_OUT}
                </li>
            </div>
        </ul>
    )
);
