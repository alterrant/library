import { Outlet, useOutletContext } from 'react-router-dom';

import { Navigation } from '../../navigation';

import styles from './layout-main-page.module.css';

export const Layout = () => {
    const { closeErrorsHandler }  = useOutletContext() as { closeErrorsHandler: () => void };

    return (
        <main className={styles.main}>
            <Navigation
                closeErrorsHandler={closeErrorsHandler}
                dataTestIdFirstSection='navigation-showcase'
                dataTestIdAllBooks='navigation-books'
                dataTestIdSectionContract='navigation-contract'
                dataTestIdSectionTerms='navigation-terms'
            />
            <Outlet />
        </main>
    );
};
