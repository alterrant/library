import classNames from 'classnames';

import { ReactComponent as SearchSVG } from './assets/search.svg';
import { SEARCH_TEXT } from './lib';
import { InputEvent } from '../../shared/config/types';

import styles from './search.module.css';
// TODO: вынести инпут в shared

type SearchProps = {
    focusHandler: (event: InputEvent) => void;
    changeHandler: (event: InputEvent) => void;
    blurHandler: (event: InputEvent) => void;
    isActivated: boolean;
    isTextChanged: boolean;
};

export const Search = ({
    changeHandler,
    blurHandler,
    focusHandler,
    isActivated,
    isTextChanged
}: SearchProps) => (
    <div className={styles.searchWrapper}>
        <input
            type="text"
            placeholder={SEARCH_TEXT}
            className={classNames(styles.searchText, isTextChanged && styles.searchTextActivated)}
            onChange={changeHandler}
            onBlur={blurHandler}
            onFocus={focusHandler}
        />
        <SearchSVG className={classNames(styles.svg, isActivated && styles.searchActivated)}/>
    </div>
);
