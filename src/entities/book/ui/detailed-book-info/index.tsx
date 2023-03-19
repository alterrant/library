import { BookDetails, DETAILED_INFO_TITLE, getBookInfoRows } from '../../lib';
import { Underline } from '../../../../shared/ui';

import styles from './detailed-book-info.module.css';

export const BookInfo = (props: BookDetails) => (
  <section>
    <p className={styles.title}>{DETAILED_INFO_TITLE}</p>
    <Underline underlineClass={styles.underline} />
    <div className={styles.infoColumnsWrapper}>
      <div className={styles.infoColumn}>{getBookInfoRows(0, 4, props)}</div>
      <div className={styles.infoColumn}>{getBookInfoRows(5, 9, props)}</div>
    </div>
  </section>
);
