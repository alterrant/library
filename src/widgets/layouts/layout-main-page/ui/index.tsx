import { Outlet, useOutletContext } from 'react-router-dom';

import { useAppSelector } from 'shared/lib';
import { Navigation } from '../../../navigation';
import { BookCardsModel } from '../../../books-content/book-cards';

import styles from './layout-main-page.module.css';

type OutletContextType = {
  closeErrorsHandler: () => void;
};

export const Layout = () => {
  const { closeErrorsHandler }: OutletContextType = useOutletContext();
  const { countedGenres } = useAppSelector(BookCardsModel.booksWithGenresSelector);

  return (
    <main className={styles.main}>
      <Navigation
        countedGenres={countedGenres}
        closeErrorsHandler={closeErrorsHandler}
      />
      <Outlet />
    </main>
  );
};
