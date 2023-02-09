import { Outlet } from 'react-router-dom';

import { Navigation } from '../../navigation';

import styles from './layout-main-page.module.css';

export const Layout = () => (
    <main className={styles.main}>
        <Navigation
            dataTestIdFirstSection='navigation-showcase'
            dataTestIdAllBooks='navigation-books'
            dataTestIdSectionContract='navigation-contract'
            dataTestIdSectionTerms='navigation-terms'
        />
        <Outlet />
    </main>
);
