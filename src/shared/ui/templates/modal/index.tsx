import { forwardRef, ReactNode } from 'react';

import styles from './modal-template.module.css';
import { ReactComponent as CloseModal } from './assets/close-modal.svg';

type ModalProps = {
  children: ReactNode;
  closeModal?: () => void;
  dataTestId: string;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  closeModal,
  dataTestId
}, ref) => (
  <section data-test-id='modal-outer' className={styles.wrapper}>
    <div data-test-id={dataTestId} className={styles.content} ref={ref}>
      {children}
      <CloseModal data-test-id='modal-close-button' className={styles.close} onClick={closeModal} />
    </div>
  </section>
));
