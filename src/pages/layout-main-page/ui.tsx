import { Outlet } from 'react-router-dom';
import { Navigation } from '../../widgets/navigation';

import styles from './layout-main-page.module.css';

export const Layout = () => (
    <main className={styles.main}>
        <Navigation/>
        <Outlet/>
    </main>
);
