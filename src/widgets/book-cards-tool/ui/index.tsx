import classNames from 'classnames';

import {
    ToggleCardsStyle,
    toggleCardsStyleModel,
    ToggleStyleType
} from '../../../features/toggle-cards-style';
import { BooksTool, BooksToolModel } from '../../../entities/books-tool';
import {CardStylesTypes, useAppDispatch} from '../../../shared/lib';

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
    } = BooksToolModel.useBooksSearchState();
    const dispatch = useAppDispatch();

    return (
        <section className={classNames(
            styles.toolsWrapper,
            isOpenedInput && styles.openedInput
        )}>
            <div className={styles.booksUtils}>
                <BooksTool.SearchFilter
                    focusHandler={(event) => BooksToolModel.searchFocusHandler(
                            event, setActivatedStatus, setStatusChangedText
                        )}
                    changeHandler={(event) => BooksToolModel.searchChangeHandler(
                            event, setActivatedStatus, setStatusChangedText, dispatch
                        )}
                    blurHandler={(event) => BooksToolModel.searchBlurHandler(
                            event, setActivatedStatus, setStatusChangedText
                        )}
                    openSearchBarHandler={() =>
                        BooksToolModel.openSearchBarHandler(setOpenedInputStatus)}
                    closeSearchHandler={() =>
                        BooksToolModel.closeSearchHandler(setOpenedInputStatus)}
                    isActivated={isActivated}
                    isTextChanged={isTextChanged}
                    isOpenedInput={isOpenedInput}
                />
                <BooksTool.RatingSort clickHandler={() =>
                    BooksToolModel.sortClickHandler(dispatch)}
                />
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
