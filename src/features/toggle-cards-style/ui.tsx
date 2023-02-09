import classNames from 'classnames';

import { SVGMouseEventType } from './config';
import { BooksColumnStyleBtn, BooksRowStyleBtn } from '../../shared/ui';
import { CARD_STYLES, CardStylesTypes } from '../../shared/lib';

import styles from './toggle-card-style.module.css';

type ToggleCardsStyleProps = {
    cardsStyle: CardStylesTypes;
    handleClick: (event: SVGMouseEventType) => void;
};

export const ToggleCardsStyle = ({
   cardsStyle = CARD_STYLES.COLUMN,
   handleClick,
}: ToggleCardsStyleProps) => {
    const getButtonStyle = (btnName: CardStylesTypes) =>
        classNames(
            cardsStyle === btnName ? styles.active : styles.inactive,
            styles.buttonStyle
        );

    return (
       <div className={styles.wrapper}>
           <BooksColumnStyleBtn
               data-test-id='button-menu-view-window'
               className={getButtonStyle(CARD_STYLES.COLUMN)}
               onClick={handleClick}
               id={CARD_STYLES.COLUMN}
           />
           <BooksRowStyleBtn
               data-test-id='button-menu-view-list'
               className={getButtonStyle(CARD_STYLES.ROW)}
               onClick={handleClick}
               id={CARD_STYLES.ROW}/>
       </div>
)};
