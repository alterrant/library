import classNames from 'classnames';

import { NavList } from 'shared/ui';
import { FONT_WEIGHT } from 'shared/lib';
import { GenreType } from '../../lib';

import styles from '../nav-list.module.css';

type GenresProps = {
  genres: (GenreType & { count: number | null })[];
  linkClickHandler?: () => void;
};

export const GenresList = ({ linkClickHandler, genres }: GenresProps) => (
  <ul>
    <NavList
      link='books/all'
      text='Все книги'
      textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
      activeLinkClass={styles.activeLink}
      handleClick={linkClickHandler}
    />
    {genres.map((genre) => (
      <NavList
        key={genre.id}
        link={`books/${genre.path}`}
        text={genre.name}
        textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
        activeLinkClass={styles.activeLink}
        handleClick={linkClickHandler}
      >
        {genre.count !== null && (
          <span className={styles.counter}>{` ${genre.count}`}</span>
        )}
      </NavList>
    ))}
  </ul>
);
