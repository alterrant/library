import { ReactNode } from 'react';

import { Underline, unsetBook } from '../../../../shared/ui';

import styles from './basik-book-info.module.css';

type BookInfoProps = {
    imgSrc: string;
    title: string;
    authors: string;
    button: ReactNode;
    description?: { id: string, text: string }[];
};

export const BookInfo = ({
    imgSrc,
    title,
    authors,
    button,
    description,
}: BookInfoProps) => (
    <div className={styles.basicBookInfo}>
        <img className={styles.image} src={imgSrc ? imgSrc : unsetBook} alt=""/>
        <p className={styles.title}>{title}</p>
        <p className={styles.authors}>{authors}</p>
        {button}
        {/* TODO: О книге вынести в конфиг + указать h4; */}
        <p className={styles.descriptionTitle}>О книге</p>
        <Underline underlineClass={styles.underline} />
        <div className={styles.description}>
            {description?.map(item => (
                <p key={item.id}>{item.text}</p>
            ))}
        </div>
    </div>
);
