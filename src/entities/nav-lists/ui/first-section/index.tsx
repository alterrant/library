import classNames from 'classnames';
import { ReactNode } from 'react';

import { NavList, Underline } from '../../../../shared/ui';
import { FONT_WEIGHT } from '../../../../shared/lib';
import { SectionListProps } from '../../lib';

import styles from '../nav-list.module.css';

type FirstSectionListProps = SectionListProps & {
    arrow: ReactNode;
};

export const FirstSection = ({
    closeErrorsHandler,
    section,
    categoryName,
    arrow,
}: FirstSectionListProps) => (
    <>
        <div className={styles.booksWrapper}>
            <NavList {...section}
                     handleClick={closeErrorsHandler}
                     textClass={classNames(styles[FONT_WEIGHT.BOLD], styles.linkText)}
                     activeLinkClass={styles.activeLink}
            />
            <>
                {categoryName === section.link && arrow}
            </>
        </div>
        {categoryName === section.link && <Underline underlineClass={styles.underline}/>}
    </>
);
