import { Outlet, useParams } from 'react-router-dom';

import { Book, BookModel } from '../../../entities/book';
import { useAppSelector, useFetch } from '../../../shared/lib';

import styles from './layout-book-page.module.css';

export const Layout = () => {
    const pathname = useParams() as { genres: string, id: string };
    const { book } = useAppSelector(BookModel.bookSelector);

    const isCached = book.id === +pathname.id;
    useFetch(BookModel.getBook(pathname.id), isCached, pathname.id);

    return (
        <main className={styles.bookPage}>
            <Book.ShortNavigation genres={pathname.genres} title={book.title} />
            <Outlet />
        </main>
    );
};
