import { BOOKS } from '../../widgets/book-cards/config';
import { BookReviews } from '../../widgets/book-reviews';
import { RateBook } from '../../features/rate-book';
import { AddToCart } from '../../features/add-to-cart';
import { ShortNavList, ShortNavListModel } from'../../entities/short-nav-list';
import { BasicBookInfo, DetailedBookInfo, BookRating } from '../../entities/book';

import styles from './book-page.module.css';

export const BookPage = () => {
    const pathname = ShortNavListModel.usePathname();

    const book = BOOKS[Number(pathname.id)];
    // TODO: брать книгу по id из стора
    // TODO: вынести BOOKS, RATINGS, REVIEWS константы в config страницы
    return (
        <main className={styles.bookPage}>
            <ShortNavList pathname={pathname} />
            <BasicBookInfo
                title={book.title}
                imgSrc={book.img}
                authors={book.author}
                description={book.description}
                button={<AddToCart
                    bookStatus={book.bookStatus}
                    buttonText={book.buttonText} />}
                />
            <section className={styles.bookAdditionalInfo}>
                <BookRating rating={book.rating}/>
                <DetailedBookInfo />
                <BookReviews />
            </section>
            <RateBook handleClick={() => {}} />
        </main>
    );
};
