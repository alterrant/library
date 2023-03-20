import { ReactNode } from 'react';

import styles from './auth-wrapper-template.module.css';

type CenteredTemplateProps = {
  header?: ReactNode;
  children: ReactNode;
};

export const Wrapper = ({ header, children }: CenteredTemplateProps) => (
  <div className={styles.wrapper}>
    <div data-test-id='auth' className={styles.container}>
      {header}
      <h1 className={styles.title}>Cleverland</h1>
      <section className={styles.contentWrapper}>{children}</section>
    </div>
  </div>
);
