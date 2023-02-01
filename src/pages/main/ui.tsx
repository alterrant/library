import { BookCardsTool } from '../../widgets/book-cards-tool';
import { BookCards } from '../../widgets/book-cards';
import { CARD_STYLES } from '../../shared/config';
import { toggleCardsStyleModel } from '../../features/toggle-cards-style';

import styles from './main-page.module.css';

export const MainPage = () => {
    const [style, toggleStyle] = toggleCardsStyleModel.useToggleCardsState(CARD_STYLES.COLUMN);

    return (
        <section className={styles.content}>
            <BookCardsTool cardsStyle={style} toggleStyle={toggleStyle}/>
            <BookCards cardsStyle={style}/>
        </section>
    )
};
