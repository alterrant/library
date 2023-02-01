import { Dispatch } from 'react';

import { InputEvent } from '../../../shared/config/types';

type SetStatus = Dispatch<boolean>;

export const changeHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus
) => {
    setStatusChangedText(true);
    setActivatedStatus(true);

    if (!event.currentTarget.value) setStatusChangedText(false);
};

export const focusHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus,
) => {
    if (event.currentTarget.value) {
        setStatusChangedText(true);
    }
    setActivatedStatus(true);
};

export const blurHandler = (
    event: InputEvent,
    setActivatedStatus: SetStatus,
    setStatusChangedText: SetStatus,
) => {
    // если хотим снимать выделение только при пустом инпуте
    /* if (event.currentTarget.value) return */
    setActivatedStatus(false);
    setStatusChangedText(false);
};
