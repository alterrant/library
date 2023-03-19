import { ReactNode } from 'react';

import { ToggleClickOutside } from 'features';
import { ReactPortal, Templates } from 'shared/ui';
import { ModalsStateType } from 'shared/lib';

type ModalsProps = {
  modalStatus: ModalsStateType;
  closeModal: () => void;
  children: ReactNode;
  dataTestId: string;
};

export const Modals = ({ children, modalStatus, closeModal, dataTestId }: ModalsProps) => {
  if (!modalStatus.isOpen) return null;

  return (
    <ReactPortal>
      <ToggleClickOutside modalStatus={modalStatus} closeModal={closeModal}>
        <Templates.Modal dataTestId={dataTestId} closeModal={closeModal}>
          {children}
        </Templates.Modal>
      </ToggleClickOutside>
    </ReactPortal>
  );
};
