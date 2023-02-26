import { Dispatch } from 'react';
import { AnyAction } from 'redux';

import { setFilterString, toggleRatingSort } from '.';
import { InputEvent } from '../../../shared/lib';

type SetStatus = Dispatch<boolean>;

export const sortClickHandler = (dispatch: Dispatch<AnyAction>) => dispatch(toggleRatingSort());

export const searchChangeHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus,
    dispatch: Dispatch<AnyAction>,
) => {
    // change custom input text
    setStatusChangedText(true);
    setActivatedStatus(true);

    if (!event.currentTarget.value) setStatusChangedText(false);
    // change store
    dispatch(setFilterString(event.currentTarget.value));
};

export const searchFocusHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus,
) => {
    if (event.currentTarget.value) {
        setStatusChangedText(true);
    }
    setActivatedStatus(true);
};

export const searchBlurHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus,
) => {
    // если хотим снимать выделение только при пустом инпуте
    /* if (event.currentTarget.value) return */
    setActivatedStatus(false);
    setStatusChangedText(false);
};
export const closeSearchHandler = (setOpenedInputStatus: SetStatus) =>
    setOpenedInputStatus(false);
export const openSearchBarHandler = (setOpenedInputStatus: SetStatus) =>
    setOpenedInputStatus(true);
