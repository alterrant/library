import { useEffect, useState } from 'react';
import { BookCardsTool } from '../../../widgets/book-cards-tool';
import { BookCards } from '../../../widgets/book-cards';
import { toggleCardsStyleModel } from '../../../features/toggle-cards-style';
import { NavListModel } from '../../../entities/nav-lists';
import { BooksModel } from '../../../entities/books';
import { Preloader } from '../../../shared/ui';
import { CARD_STYLES, TOKEN, useAppDispatch, useAppSelector } from '../../../shared/lib';

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

    const isLoading = isNavLoading;
    const isError = navError || booksError;

    // const isCached = !!books?.length;
    const dispatch = useAppDispatch();
    const [test, setTest] = useState(false);

    const token = localStorage.getItem(TOKEN);

    useEffect(() => {
        if (token && test) dispatch(BooksModel.getBooks());

        return  () => setTest(true);
    },[test])

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
