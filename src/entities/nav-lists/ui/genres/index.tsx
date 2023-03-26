import classNames from 'classnames';

import { NavList } from 'shared/ui';
import { FONT_WEIGHT } from 'shared/lib';
import { GenreType } from '../../lib';

import styles from '../nav-list.module.css';

type GenresProps = {
  dataTestId: string;
  genres: (GenreType & { count: number | null })[];
  linkClickHandler?: () => void;
};

export const GenresList = ({ dataTestId, linkClickHandler, genres }: GenresProps) => (
  <ul>
    <NavList
      dataTestId={`${dataTestId}books`}
      link='books/all'
      text='Все книги'
      textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
      activeLinkClass={styles.activeLink}
      handleClick={linkClickHandler}
    />
    {genres.map((genre) => (
      <NavList
        key={genre.id}
        dataTestId={`${dataTestId}${genre.path}`}
        link={`books/${genre.path}`}
        text={genre.name}
        textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
        activeLinkClass={styles.activeLink}
        handleClick={linkClickHandler}
      >
        {genre.count !== null && (
          <span
            data-test-id={`${dataTestId}book-count-for-${genre.path}`}
            className={styles.counter}
          >{` ${genre.count}`}</span>
        )}
      </NavList>
    ))}
  </ul>
);
