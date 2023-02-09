import classNames from "classnames";

import { ToggleCardsStyle, toggleCardsStyleModel } from '../../features/toggle-cards-style';
import { ToggleStyleType } from '../../features/toggle-cards-style/config';
import { Books, BooksModel } from '../../entities/books';
import { CardStylesTypes } from '../../shared/lib';

import styles from './book-cards-tool.module.css';

type ToolProps = {
    cardsStyle: CardStylesTypes;
    toggleStyle: ToggleStyleType
};

export const Tool = ({cardsStyle, toggleStyle}: ToolProps) => {
    const {
        isActivated,
        isTextChanged,
        isOpenedInput,
        setActivatedStatus,
        setStatusChangedText,
        setOpenedInputStatus
    } = BooksModel.useBookSearchState();

    return (
        <section className={classNames(styles.toolsWrapper, isOpenedInput && styles.openedInput)}>
            <div className={styles.booksUtils}>
                <Books.SearchBooks
                    focusHandler={(event) => BooksModel.searchFocusHandler(
                            event, setActivatedStatus, setStatusChangedText
                        )}
                    changeHandler={(event) => BooksModel.searchChangeHandler(
                            event, setActivatedStatus, setStatusChangedText
                        )}
                    blurHandler={(event) => BooksModel.searchBlurHandler(
                            event, setActivatedStatus, setStatusChangedText
                        )}
                    openSearchBarHandler={() => BooksModel.openSearchBarHandler(setOpenedInputStatus)}
                    closeSearchHandler={() => BooksModel.closeSearchHandler(setOpenedInputStatus)}
                    isActivated={isActivated}
                    isTextChanged={isTextChanged}
                    isOpenedInput={isOpenedInput}
                />
                <Books.BookCardsFilter/>
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
