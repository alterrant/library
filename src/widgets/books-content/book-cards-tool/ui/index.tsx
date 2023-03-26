import classNames from 'classnames';

import { ToggleCardsStyle, toggleCardsStyleModel, ToggleStyleType } from 'features/toggle-cards-style';
import { SVGMouseEventType } from 'features/toggle-cards-style/types';
import { BooksTool, BooksToolModel } from 'entities/books-tool';
import { CardStylesTypes, InputEvent, useAppDispatch } from 'shared/lib';

import styles from './book-cards-tool.module.css';

type ToolProps = {
  cardsStyle: CardStylesTypes;
  toggleStyle: ToggleStyleType;
};

export const Tool = ({ cardsStyle, toggleStyle }: ToolProps) => {
  const { isActivated, isTextChanged, isOpenedInput, setActivatedStatus, setStatusChangedText, setOpenedInputStatus } =
    BooksToolModel.useBooksSearchState();
  const dispatch = useAppDispatch();

  const searchFocusHandler = (event: InputEvent) =>
    BooksToolModel.searchFocusHandler(event, setActivatedStatus, setStatusChangedText);

  const searchChangeHandler = (event: InputEvent) =>
    BooksToolModel.searchChangeHandler(event, setActivatedStatus, setStatusChangedText, dispatch);

  const searchBlurHandler = (event: InputEvent) =>
    BooksToolModel.searchBlurHandler(event, setActivatedStatus, setStatusChangedText);

  const openSearchBarHandler = () => BooksToolModel.openSearchBarHandler(setOpenedInputStatus);
  const closeSearchHandler = () => BooksToolModel.closeSearchHandler(setOpenedInputStatus);
  const sortRatingHandler = () => BooksToolModel.sortClickHandler(dispatch);

  const toggleClickHandler = (event: SVGMouseEventType) => {
    toggleCardsStyleModel.toggleHandler(cardsStyle, toggleStyle, event);
  };

  return (
    <section className={classNames(styles.toolsWrapper, isOpenedInput && styles.openedInput)}>
      <div className={styles.booksUtils}>
        <BooksTool.SearchFilter
          focusHandler={searchFocusHandler}
          changeHandler={searchChangeHandler}
          blurHandler={searchBlurHandler}
          openSearchBarHandler={openSearchBarHandler}
          closeSearchHandler={closeSearchHandler}
          isActivated={isActivated}
          isTextChanged={isTextChanged}
          isOpenedInput={isOpenedInput}
        />
        <BooksTool.RatingSort clickHandler={sortRatingHandler} />
      </div>
      <ToggleCardsStyle cardsStyle={cardsStyle} handleClick={toggleClickHandler} />
    </section>
  );
};
