import classNames from 'classnames';

import { CARD_STYLES, CardStylesTypes } from 'shared/lib';
import styles from '../../ui/book-cards-wrapper.module.css';

export const getCardsClassName = (cardsStyle: CardStylesTypes) =>
  classNames(styles.container, cardsStyle === CARD_STYLES.COLUMN && styles.columnCardsStyle);
