import { cloneElement, ReactElement, ReactNode, useRef } from 'react';

import {ModalsStateType, useClickOutside, useCloseWindow, useScrollLock} from 'shared/lib';
import { outsideClickHandler } from './model';

type ToggleClickOutsideProps = {
  children: ReactNode;
  modalStatus: ModalsStateType;
  closeModal: () => void;
};

export const ToggleClickOutside = ({
  children,
  modalStatus,
  closeModal,
}: ToggleClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = (e: MouseEvent) =>
    outsideClickHandler({
      e,
      stateStatus: modalStatus,
      setStateStatus: closeModal,
      ref,
    });

  useClickOutside(modalStatus.isOpen, onClickOutside);
  useScrollLock(modalStatus.isOpen);
  useCloseWindow(modalStatus.isOpen, closeModal);

  return cloneElement(children as ReactElement, { ref });
};
