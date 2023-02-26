import { BookCardsTool } from '../../widgets/book-cards-tool';
import { BookCards } from '../../widgets/book-cards';
import { toggleCardsStyleModel } from '../../features/toggle-cards-style';
import { NavListModel } from '../../entities/nav-lists';
import { BooksModel } from '../../entities/books';
import { Preloader } from '../../shared/ui';
import { CARD_STYLES, useAppSelector, useFetch } from '../../shared/lib';

import styles from './main-page.module.css';

export const MainPage = () => {
    const [style, toggleStyle] = toggleCardsStyleModel.useToggleCardsState(CARD_STYLES.COLUMN);

    const {
        isLoading: isNavLoading,
        error: navError,
    } = useAppSelector(NavListModel.genresSelector);
    const {
        isLoading: isBooksLoading,
        error: booksError,
    } = useAppSelector(BooksModel.booksSelector);

    const isLoading = isNavLoading || isBooksLoading;
    const isError = navError || booksError;

    // const isCached = !!books?.length;

    useFetch(BooksModel.getBooks());

    return (
        <>
            {!isError && (
                isLoading ? <Preloader /> : (
                    <section className={styles.content}>
                        <BookCardsTool cardsStyle={style} toggleStyle={toggleStyle} />
                        <BookCards cardsStyle={style}/>
                    </section>
                )
            )}
        </>
    );
};
