import { Underline } from 'shared/ui';
import { BookDetails, DETAILED_INFO_TITLE } from '../../config';

import styles from './detailed-book-info.module.css';
import { BookInfoRowList } from './book-info-row-list';

export const BookInfo = (props: BookDetails) => (
  <section>

    <p className={styles.title}>{DETAILED_INFO_TITLE}</p>
    <Underline underlineClass={styles.underline} />

    <div className={styles.infoColumnsWrapper}>
      <div className={styles.infoColumn}>
        {/* первая колонка свойств книги */}
        <BookInfoRowList minPropertiesOfBookDetails={0} maxPropertiesOfBookDetails={4} bookDetails={props} />
      </div>
      <div className={styles.infoColumn}>
        {/* вторая колонка свойств книги */}
        <BookInfoRowList minPropertiesOfBookDetails={5} maxPropertiesOfBookDetails={9} bookDetails={props} />
      </div>
    </div>
  </section>
);
