import { Outlet } from 'react-router-dom';

import styles from './layout-book-page.module.css';

export const Layout = () => (
    <main className={styles.bookPage}>
        <Outlet/>
    </main>
);
