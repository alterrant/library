import { FC } from 'react';

import styles from './contact.module.css';

type ContactProps = {
  link: string;
  SVGComponent: FC;
};

export const Contact = ({ link, SVGComponent }: ContactProps) => (
  <a href={link} className={styles.link}>
    <SVGComponent />
  </a>
);
