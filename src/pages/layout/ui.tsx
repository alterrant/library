import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';

import styles from './layout.module.css';

export const Layout = () => (
    <section className={styles.layoutContainer}>
        <Header/>
        <Outlet/>
        <Footer />
    </section>
);
