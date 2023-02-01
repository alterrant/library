import { ToggleCardsStyle, toggleCardsStyleModel } from '../../features/toggle-cards-style';
import { ToggleStyleType } from '../../features/toggle-cards-style/config';
import { BookCardsFilter } from '../../entities/book-cards-filter';
import { SearchBooks, useBookSearchState } from '../../entities/book-search';
import { focusHandler, blurHandler, changeHandler} from '../../entities/book-search/lib';
import { CardStylesTypes } from '../../shared/config';

import styles from './book-cards-tool.module.css';

type ToolProps = {
    cardsStyle: CardStylesTypes;
    toggleStyle: ToggleStyleType
};

export const Tool = ({cardsStyle, toggleStyle}: ToolProps) => {
    const {
        isActivated,
        setActivatedStatus,
        isTextChanged,
        setStatusChangedText
    } = useBookSearchState();

    return (
        <section className={styles.toolsWrapper}>
            <div className={styles.booksUtils}>
                <SearchBooks
                    focusHandler={(event) => focusHandler(event, setActivatedStatus, setStatusChangedText)}
                    changeHandler={(event) => changeHandler(event, setActivatedStatus, setStatusChangedText)}
                    blurHandler={(event) =>
                        blurHandler(event, setActivatedStatus, setStatusChangedText)}
                    isActivated={isActivated}
                    isTextChanged={isTextChanged}
                />
                <BookCardsFilter/>
            </div>
            <ToggleCardsStyle
                cardsStyle={cardsStyle}
                handleClick={(event) => {
                    toggleCardsStyleModel.toggleHandler(cardsStyle, toggleStyle, event)
                }}
            />
        </section>
    );
};
