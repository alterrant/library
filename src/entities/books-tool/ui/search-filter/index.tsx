import classNames from 'classnames';

import { Close } from 'shared/ui';
import { InputEvent } from 'shared/lib';
import { ReactComponent as SearchSVG } from './assets/search.svg';
import { SEARCH_TEXT } from '../../lib';

import styles from './search.module.css';

type SearchProps = {
  focusHandler: (event: InputEvent) => void;
  changeHandler: (event: InputEvent) => void;
  blurHandler: (event: InputEvent) => void;
  openSearchBarHandler: () => void;
  closeSearchHandler: () => void;
  isActivated: boolean;
  isTextChanged: boolean;
  isOpenedInput: boolean;
};

export const Search = ({
  changeHandler,
  blurHandler,
  focusHandler,
  openSearchBarHandler,
  closeSearchHandler,
  isActivated,
  isTextChanged,
  isOpenedInput,
}: SearchProps) => (
  <div className={styles.searchWrapper}>
    {!isOpenedInput && (
      <SearchSVG
        onClick={openSearchBarHandler}
        className={classNames(styles.svg, isActivated && styles.searchActivated)}
      />
    )}
    <input
      type='text'
      placeholder={SEARCH_TEXT}
      className={classNames(styles.searchText, isTextChanged && styles.searchTextActivated)}
      onChange={changeHandler}
      onBlur={blurHandler}
      onFocus={focusHandler}
    />
    {isOpenedInput && (
      <Close
        onClick={closeSearchHandler}
        className={classNames(styles.svg, styles.close)}
      />
    )}
  </div>
);
