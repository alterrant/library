import { forwardRef, ReactNode } from 'react';

import { ReactComponent as CloseModal } from './assets/close-modal.svg';

import styles from './modal-template.module.css';

type ModalProps = {
  children: ReactNode;
  closeModal?: () => void;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  closeModal,
}, ref) => (
  <section className={styles.wrapper}>
    <div className={styles.content} ref={ref}>
      {children}
      <CloseModal className={styles.close} onClick={closeModal} />
    </div>
  </section>
));
