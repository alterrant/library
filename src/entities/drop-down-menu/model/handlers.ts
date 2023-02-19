import { Dispatch, RefObject } from 'react';

type OutsideClickHandlerProps = {
    e: MouseEvent;
    isOpen: boolean;
    toggle: Dispatch<boolean>;
    dropDownMenuRef: RefObject<HTMLElement>;
}

export const outsideDropDownHandler = ({
    e,
    isOpen,
    toggle,
    dropDownMenuRef,
}: OutsideClickHandlerProps) => {
    if (
        isOpen &&
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target as Node)
    ) {
        toggle(false);

        if (isOpen) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
};
