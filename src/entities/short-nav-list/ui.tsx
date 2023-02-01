// TODO: уточнить: ссылка использует id или title + переписать navigationList при необходимости
// TODO: перенести в виджеты, если нужно будет нажимать и переходить по ссылке
import { Params } from '@remix-run/router/utils';
import { getNavigationList } from './utils';

import styles from './short-nav-list.module.css';
// TODO: переделать NavListMODEL
type NavListProps = {
    pathname: Readonly<Params<string>>
}
export const NavList = ({pathname}: NavListProps) =>  (
    <div className={styles.shortNavWrapper}>
        <span>{getNavigationList(pathname)}</span>
    </div>
);
