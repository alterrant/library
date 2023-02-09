import { Fragment } from 'react';

import { BOOK_INFO, DETAILED_INFO_TITLE, translateInfoKeys } from '../../lib';
import { Underline } from '../../../../shared/ui';

import styles from './detailed-book-info.module.css';

export const BookInfo = () => {
    const getRowsList = (key:string, value:string) => (
        <Fragment key={key}>
            <p className={styles.infoKey}>{translateInfoKeys(key)}</p>
            <p>{value}</p>
        </Fragment>
    )
    const getInfoRows = (min:number, max:number) => BOOK_INFO.map((bookInfo) => (
        /* TODO: если будет список со всеми книгами, сделать проверку на нужную книгу */
        /* if (id = bookId) */
            Object.entries(bookInfo).map((item, index) => {
                if (index >= min && index <= max ) return getRowsList(item[0], item[1]);
            })
    ));

    return (
        <section>
            <p className={styles.title}>{DETAILED_INFO_TITLE}</p>
            <Underline underlineClass={styles.underline} />
            <div className={styles.infoColumnsWrapper}>
                <div className={styles.infoColumn}>{getInfoRows(1, 5)}</div>
                <div className={styles.infoColumn}>{getInfoRows(6, 9)}</div>
            </div>
        </section>
    );
};
