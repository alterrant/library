import { ReactNode } from 'react';

import styles from './booking-template.module.css';

type BookingProps = {
  title: string;
  buttons: ReactNode;
  children: ReactNode;
};

export const Booking = ({ title, buttons, children }: BookingProps) => (
  <div className={styles.wrapper}>
    <h3 data-test-id='modal-title' className={styles.title}>{title}</h3>
    {children}
    {buttons}
  </div>
);
