import { Dispatch, RefObject } from 'react';

type OutsideClickHandlerProps = {
  e: MouseEvent;
  stateStatus: { isOpen: boolean };
  setStateStatus: Dispatch<{ isOpen: boolean }>;
  ref: RefObject<HTMLElement>;
};

export const outsideClickHandler = ({
  e,
  stateStatus,
  setStateStatus,
  ref,
}: OutsideClickHandlerProps) => {
  if (stateStatus.isOpen && ref.current && !ref.current.contains(e.target as Node)) {
    setStateStatus({ isOpen: false });

    if (stateStatus) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
