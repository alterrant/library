import { NavList, NavListModule } from '../../entities/nav-list';
import { getCategoryName } from '../../entities/nav-list/lib';

import styles from './navigation.module.css';

export const Navigation = () => {
    const pathname = NavListModule.usePathname();
    const categoryName = getCategoryName(pathname);

    return (
        <nav className={styles.nav}>
            <NavList categoryName={categoryName}/>
        </nav>
    );
};
