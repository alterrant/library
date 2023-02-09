import classNames from 'classnames';
import { Dispatch } from 'react';

import { genres } from '../../lib';
import { NavList } from '../../../../shared/ui';
import { FONT_WEIGHT } from '../../../../shared/lib';

import styles from '../../nav-list.module.css';

type GenresProps = {
    dataTestId: string;
    toggleStatus?: Dispatch<boolean>;
};

export const GenresList = ({ dataTestId, toggleStatus }: GenresProps) => (
    <ul>
        {genres.map(genre => (
            <NavList
                dataTestId={(genre.id === '0') ? dataTestId : undefined}
                key={genre.id} {...genre}
                textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
                activeLinkClass={styles.activeLink}
                handleClick={toggleStatus}
            >
                {genre.count && (
                    <span className={styles.counter}>{` ${genre.count}`}</span>
                )}
            </NavList>
        ))}
    </ul>
);
