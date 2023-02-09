import { BookReviews } from '../../widgets/book-reviews';
import { RateBook } from '../../features/rate-book';
import { AddToCart } from '../../features/add-to-cart';
import { ShortNavList, ShortNavListModel } from'../../entities/short-nav-list';
import { Book } from '../../entities/book';
import { BookImagesContainer } from '../../entities/book/ui/book-images-container';
import { BOOKS } from '../../entities/books/lib';
import { REVIEWS } from '../../entities/book/lib';
import { PageNotFound } from '../../shared/ui/page-not-found';

import styles from './book-page.module.css';

export const BookPage = () => {
    const pathname = ShortNavListModel.usePathname();
    const book = BOOKS[Number(pathname.id)];
    // TODO: брать книгу по id из стора
    if (!book) return <PageNotFound />;

    return (
        <>
            <ShortNavList pathname={pathname} />
            <Book.BasicInfo
                imagesContainer={<BookImagesContainer images={book.img} />}
                title={book.title}
                authors={book.author}
                description={book.description}
                button={<AddToCart
                    bookStatus={book.bookStatus}
                    buttonText={book.buttonText} />}
                />
            <section className={styles.bookAdditionalInfo}>
                <Book.Rating rating={book.rating}/>
                <Book.DetailedInfo />
                <BookReviews reviews={REVIEWS}/>
            </section>
            <RateBook handleClick={() => {}} />
        </>
    );
};
