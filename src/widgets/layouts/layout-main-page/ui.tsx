import { Outlet, useOutletContext } from 'react-router-dom';

import { Navigation } from '../../navigation';
import { BookCardsModel } from '../../book-cards';
import { useAppSelector } from '../../../shared/lib';

import styles from './layout-main-page.module.css';

type OutletContextType = {
    closeErrorsHandler: () => void;
};

export const Layout = () => {
    const { closeErrorsHandler }: OutletContextType = useOutletContext();
    const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);

    return (
        <main className={styles.main}>
            <Navigation
                countedGenres={countedGenres}
                closeErrorsHandler={closeErrorsHandler}
                dataTestIdFirstSection='navigation-showcase'
                dataTestIdAllBooks='navigation-'
                dataTestIdSectionContract='navigation-contract'
                dataTestIdSectionTerms='navigation-terms'
            />
            <Outlet />
        </main>
    );
};
