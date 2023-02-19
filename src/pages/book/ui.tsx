import { BookReviews } from '../../widgets/book-reviews';
import { RateBook } from '../../features/rate-book';
import { AddToCart, timeFormatOptions } from '../../features/add-to-cart';
import { NavListModel } from '../../entities/nav-lists';
import { Book, BookModel } from '../../entities/book';
import { Preloader } from '../../shared/ui';
import { getDate, useAppSelector } from '../../shared/lib';

import styles from './book-page.module.css';

export const BookPage = () => {
    const {
        book,
        isLoading: isBookLoading,
        error: bookError,
    } = useAppSelector(BookModel.bookSelector);
    const {
        isLoading: isNavLoading,
        error: navError
    } = useAppSelector(NavListModel.genresSelector);

    const isLoading = isBookLoading || isNavLoading;
    const isError = bookError || navError;

    return (
        isLoading ? <Preloader /> : (
            !isError ? (
                <>
                    <Book.BasicInfo
                        imagesContainer={<Book.BookImagesContainer images={book.images}/>}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        button={
                        <AddToCart
                            bookStatus={book.booking?.order ? 'reserved' : 'available'}
                            buttonText={book.booking?.order ?
                                `занята до ${getDate(book.booking?.dateOrder, timeFormatOptions)}`
                                :
                                'забронировать'}
                        />
                    }
                    />
                    <section className={styles.bookAdditionalInfo}>
                        <Book.Rating rating={book.rating}/>
                        <Book.DetailedInfo
                            publish={book.publish}
                            issueYear={book.issueYear}
                            pages={book.pages}
                            cover={book.cover}
                            format={book.format}
                            categories={book.categories}
                            weight={book.weight}
                            ISBN={book.ISBN}
                            producer={book.producer}
                        />
                        <BookReviews comments={book.comments} />
                    </section>
                    <RateBook handleClick={() => {}} />
                </>
            ) : <></>
        )
    )
};
