import classNames from 'classnames';

import { ReactComponent as SearchSVG } from './assets/search.svg';
import { SEARCH_TEXT } from '../../lib';
import { Close } from "../../../../shared/ui";
import { InputEvent } from '../../../../shared/lib/types';

import styles from './search.module.css';

// TODO: вынести инпут в shared

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
        {!isOpenedInput && <SearchSVG data-test-id='button-search-open'
            onClick={openSearchBarHandler}
            className={classNames(styles.svg, isActivated && styles.searchActivated)}
        />}
        <input
            data-test-id='input-search'
            type="text"
            placeholder={SEARCH_TEXT}
            className={classNames(styles.searchText, isTextChanged && styles.searchTextActivated)}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
        />
        {isOpenedInput && <Close
            data-test-id='button-search-close'
            onClick={closeSearchHandler}
            className={classNames(styles.svg, styles.close)}
        />}
    </div>
);
