import classNames from 'classnames';

import { NavList } from '../../../../shared/ui';
import { FONT_WEIGHT } from '../../../../shared/lib';
import { GenreType } from '../../lib';

import styles from '../../nav-list.module.css';

type GenresProps = {
    dataTestId: string;
    genres: GenreType[];
    toggleStatus?: () => void;
};

export const GenresList = ({ dataTestId, toggleStatus, genres }: GenresProps) => (
    <ul>
        <NavList
            dataTestId={dataTestId}
            link="books/all"
            text="Все книги"
            textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
            activeLinkClass={styles.activeLink}
            handleClick={toggleStatus}
        />
        {genres.map(genre => (
            <NavList
                key={genre.id}
                dataTestId={(genre.id === '0') ? dataTestId : undefined}
                link={`books/${genre.path}`}
                text={genre.name}
                textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
                activeLinkClass={styles.activeLink}
                handleClick={toggleStatus}
            >
                {/* {genre?.count && (
                    <span className={styles.counter}>{` ${genre.count}`}</span>
                )} */}
                <span className={styles.counter}>{` 1`}</span>
            </NavList>
        ))}
    </ul>
);
