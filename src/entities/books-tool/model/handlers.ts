import { Dispatch } from 'react';

import { DispatchAnyType, InputEvent } from 'shared/lib';
import { setFilterString, toggleRatingSort } from '.';

type SetStatus = Dispatch<boolean>;

export const sortClickHandler = (dispatch: DispatchAnyType) => dispatch(toggleRatingSort());

export const searchChangeHandler = (
  event: InputEvent,
  setActivatedStatus: SetStatus,
  setStatusChangedText: SetStatus,
  dispatch: DispatchAnyType
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
  setStatusChangedText: SetStatus
) => {
  if (event.currentTarget.value) {
    setStatusChangedText(true);
  }
  setActivatedStatus(true);
};

export const searchBlurHandler = (
  event: InputEvent,
  setActivatedStatus: SetStatus,
  setStatusChangedText: SetStatus
) => {
  // если хотим снимать выделение только при пустом инпуте
  /* if (event.currentTarget.value) return */
  setActivatedStatus(false);
  setStatusChangedText(false);
};
export const closeSearchHandler = (setOpenedInputStatus: SetStatus) => setOpenedInputStatus(false);
export const openSearchBarHandler = (setOpenedInputStatus: SetStatus) => setOpenedInputStatus(true);
