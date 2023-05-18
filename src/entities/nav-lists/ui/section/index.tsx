import classNames from 'classnames';

import { NavList, Underline } from 'shared/ui';
import { FONT_WEIGHT } from 'shared/lib';
import { SectionListProps } from '../../lib';

import styles from '../nav-list.module.css';

export const SectionList = ({
  section,
  categoryName,
  closeErrorsHandler,
}: SectionListProps) => (
  <NavList
    {...section}
    handleClick={closeErrorsHandler}
    textClass={classNames(styles[FONT_WEIGHT.BOLD], styles.linkText)}
    activeLinkClass={styles.activeLink}
  >
    {categoryName === section.link && <Underline underlineClass={styles.underline} />}
  </NavList>
);
