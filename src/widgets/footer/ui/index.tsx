import { Contacts } from 'entities/contacts';
import { Underline } from 'shared/ui';
import { COPYRIGHT } from '../config';

import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footerWrapper}>
    <Underline />
    <div className={styles.footerContent}>
      <p>{COPYRIGHT}</p>
      <Contacts />
    </div>
  </footer>
);
