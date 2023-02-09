import { ReactNode } from 'react';

import { Underline } from '../../../../shared/ui';

import styles from './basik-book-info.module.css';

type BookInfoProps = {
    title: string;
    authors: string;
    button: ReactNode;
    description?: { id: string, text: string }[];
    imagesContainer: ReactNode;
};

export const BookInfo = ({
    imagesContainer,
    title,
    authors,
    button,
    description,
}: BookInfoProps) => (
    <div className={styles.basicBookInfo}>
        {imagesContainer}
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
