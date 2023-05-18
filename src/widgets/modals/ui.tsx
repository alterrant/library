import { ReactNode } from 'react';

import { ToggleClickOutside } from 'features/toggle-with-click-outside';
import { ReactPortal, Templates } from 'shared/ui';
import { ModalsStateType } from 'shared/lib';

type ModalsProps = {
  modalStatus: ModalsStateType;
  closeModal: () => void;
  children: ReactNode;
};

export const Modals = ({ children, modalStatus, closeModal }: ModalsProps) => {
  if (!modalStatus.isOpen) return null;

  return (
    <ReactPortal>
      <ToggleClickOutside modalStatus={modalStatus} closeModal={closeModal}>
        <Templates.Modal closeModal={closeModal}>
          {children}
        </Templates.Modal>
      </ToggleClickOutside>
    </ReactPortal>
  );
};
