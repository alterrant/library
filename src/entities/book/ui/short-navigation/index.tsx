import { NavLink } from 'react-router-dom';

import { GenreType } from '../../../nav-lists';
import { Nullable } from '../../../../shared/lib';

import styles from './short-navigation.module.css';
// TODO: вынести из компоненты проверку на all
type NavListProps = {
    genre: GenreType | undefined;
    title: Nullable<string>;
};

export const ShortNavigation = ({genre, title}: NavListProps) => {
    const isUnknownPath = !genre?.path;

    return (
        <div className={styles.shortNavWrapper}>
        <span>
            <NavLink to={`books/${isUnknownPath ? 'all' : genre.path}`} data-test-id='breadcrumbs-link'>
                {`${isUnknownPath ? 'Все книги' : genre.name}`}
            </NavLink>
            {` / `}
            {title && <span data-test-id='book-name'>{title}</span>}
        </span>
        </div>
    );
}
