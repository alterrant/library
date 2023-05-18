import { ReactNode } from 'react';

import styles from './centred-template.module.css';

type CenteredTemplateProps = {
  children: ReactNode;
};

export const CenteredTemplate = ({ children }: CenteredTemplateProps) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);
