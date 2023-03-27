import { BookCardsTool } from 'widgets/books-content/book-cards-tool';
import { BookCards } from 'widgets/books-content/book-cards';
import { Preloader } from 'shared/ui';
import { TOKEN } from 'shared/lib';
import { useMainPage } from '../model';

import styles from './main-page.module.css';

export const MainPage = () => {
  const token = localStorage.getItem(TOKEN);

  const { isLoading, toggleStyle, style } = useMainPage(token);

  return isLoading ? (
    <Preloader />
  ) : (
    <section className={styles.content}>
      <BookCardsTool cardsStyle={style} toggleStyle={toggleStyle} />
      <BookCards cardsStyle={style} />
    </section>
  );
};
