import { Dispatch } from 'react';

import { InputEvent } from '../../../shared/lib/types';

type SetStatus = Dispatch<boolean>;

export const searchChangeHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus
) => {
    setStatusChangedText(true);
    setActivatedStatus(true);

    if (!event.currentTarget.value) setStatusChangedText(false);
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
